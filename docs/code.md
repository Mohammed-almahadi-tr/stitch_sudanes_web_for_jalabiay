You are building a full-stack web application called "Dishdasha & Jellabiya Platform" — 
a tailoring marketplace that connects Sudanese customers with local tailors for custom 
traditional garments. Build this app completely, screen by screen, step by step.

---

TECH STACK:
- Frontend: React.js with Tailwind CSS
- Backend: Node.js + Express
- Database: MySQL
- Authentication: JWT (JSON Web Tokens)
- Maps: Leaflet.js + OpenStreetMap (free, no API key needed)
- Payments: Stripe (test/sandbox mode)
- File Uploads: Multer
- AI Measurements: Flask microservice (call it as external API at http://localhost:5001)

---

DESIGN SYSTEM:
- Background: #FAFAF8
- Primary text: #1C1C1A
- Gold accent: #C9A84C (buttons, highlights, active states)
- Success green: #6B8F71
- Font: system Arabic-friendly font stack
- Border radius: 12px on cards, 8px on inputs, 24px on buttons
- All cards: white background, 1px border #E8E6E0, shadow-sm
- Mobile-first, responsive

---

STEP 1 — PROJECT STRUCTURE

Create this folder structure:

dishdasha-platform/
├── frontend/          (React app)
├── backend/           (Node.js API)
└── measurement-api/   (Flask — mock it for now)

---

STEP 2 — DATABASE SETUP

Create a MySQL database called dishdasha_db.
Create these tables exactly:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255),
  role ENUM('customer', 'tailor', 'admin'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tailors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  bio TEXT,
  location_lat DECIMAL(10,8),
  location_lng DECIMAL(11,8),
  city VARCHAR(100),
  rating_avg DECIMAL(3,2) DEFAULT 0,
  rating_count INT DEFAULT 0
);

CREATE TABLE measurements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  chest_cm DECIMAL(5,2),
  waist_cm DECIMAL(5,2),
  hips_cm DECIMAL(5,2),
  shoulder_cm DECIMAL(5,2),
  height_cm DECIMAL(5,2),
  front_image_url VARCHAR(255),
  side_image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  tailor_id INT REFERENCES tailors(id),
  measurement_id INT REFERENCES measurements(id),
  design_name VARCHAR(100),
  status ENUM('pending','confirmed','in_progress','done') DEFAULT 'pending',
  price DECIMAL(10,2),
  payment_status ENUM('unpaid','paid') DEFAULT 'unpaid',
  stripe_payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ratings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  customer_id INT REFERENCES users(id),
  tailor_id INT REFERENCES tailors(id),
  stars INT CHECK(stars BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE portfolio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tailor_id INT REFERENCES tailors(id),
  image_url VARCHAR(255),
  description VARCHAR(255)
);

INSERT seed data with 3 sample tailors in Khartoum with realistic 
lat/lng coordinates, portfolios, and ratings.

---

STEP 3 — BACKEND SETUP

Initialize Node.js project. Install:
express, mysql2, jsonwebtoken, bcryptjs, cors, dotenv, multer, stripe

Create server.js that:
- Connects to MySQL using connection pool
- Enables CORS for localhost:3000
- Parses JSON body
- Serves uploaded images as static files from /uploads folder
- Mounts all route files
- Listens on port 3001

Create .env file with:
DB_HOST, DB_USER, DB_PASSWORD, DB_NAME,
JWT_SECRET, STRIPE_SECRET_KEY=sk_test_xxxxx

Create middleware/auth.js:
- verifyToken: extracts Bearer token from Authorization header,
  verifies with JWT_SECRET, attaches decoded user to req.user
- requireRole(role): checks req.user.role matches expected role

---

STEP 4 — BACKEND AUTH ROUTES

Create routes/auth.js with:

POST /api/auth/register
- Accept: name, email, password, role (customer or tailor)
- Hash password with bcrypt (salt 10)
- Insert into users table
- If role is tailor, also insert into tailors table with empty fields
- Return success message

POST /api/auth/login
- Find user by email
- Compare password with bcrypt
- On success, sign JWT with userId and role, expires in 7 days
- Return token and user object (id, name, email, role)

GET /api/auth/me (protected)
- Return current user info from token

---

STEP 5 — BACKEND TAILOR ROUTES

Create routes/tailors.js with:

GET /api/tailors
- Return all tailors joined with users table
- Include: id, name, city, rating_avg, rating_count, location_lat, 
  location_lng, bio
- Include their portfolio images as array

GET /api/tailors/nearby
- Accept query params: lat, lng
- Calculate distance using Haversine formula in SQL
- Return tailors sorted by distance ascending
- Include distance_km in response

GET /api/tailors/:id
- Return single tailor with full profile
- Include portfolio images array
- Include last 5 ratings with customer name and comment

PUT /api/tailors/profile (protected, tailor only)
- Update bio, city, location_lat, location_lng

POST /api/tailors/portfolio (protected, tailor only)
- Upload image with Multer
- Save to portfolio table

---

STEP 6 — BACKEND MEASUREMENT ROUTES

Create routes/measurements.js with:

POST /api/measurements (protected, customer only)
- Accept: front_image, side_image (via Multer), height_cm
- Save images to /uploads folder
- Call Flask microservice at http://localhost:5001/measurements
  with both images and height
- If Flask is unavailable, use fallback calculation based on height:
  chest = height * 0.52, waist = height * 0.43, 
  hips = height * 0.54, shoulder = height * 0.24
- Save results to measurements table
- Return measurement object

GET /api/measurements/my (protected, customer only)
- Return latest measurement for logged in customer

---

STEP 7 — BACKEND ORDER ROUTES

Create routes/orders.js with:

POST /api/orders (protected, customer only)
- Accept: tailor_id, measurement_id, design_name, price
- Insert into orders table with status pending, payment_status unpaid
- Return created order

GET /api/orders/my (protected, customer only)
- Return all orders for logged in customer
- Include tailor name and status

GET /api/orders/tailor (protected, tailor only)
- Return all orders for logged in tailor
- Include customer name, measurements, design name

PUT /api/orders/:id/status (protected, tailor only)
- Accept: status (confirmed, in_progress, done)
- Update order status
- Return updated order

---

STEP 8 — BACKEND PAYMENT ROUTES

Create routes/payments.js with:

POST /api/payments/create (protected)
- Accept: amount (in SDG), orderId
- Create Stripe PaymentIntent with amount converted to cents
- Add orderId to metadata
- Return clientSecret

POST /api/payments/confirm (protected)
- Accept: orderId, stripePaymentId
- Update order payment_status to paid
- Update stripe_payment_id field

---

STEP 9 — BACKEND RATING ROUTES

Create routes/ratings.js with:

POST /api/ratings (protected, customer only)
- Accept: order_id, tailor_id, stars, comment
- Insert into ratings table
- Recalculate tailor's rating_avg and rating_count:
  UPDATE tailors SET 
    rating_avg = (SELECT AVG(stars) FROM ratings WHERE tailor_id = ?),
    rating_count = (SELECT COUNT(*) FROM ratings WHERE tailor_id = ?)
  WHERE id = ?
- Return success

GET /api/ratings/tailor/:id
- Return all ratings for a tailor with customer name

---

STEP 10 — BACKEND ADMIN ROUTES

Create routes/admin.js (protected, admin only) with:

GET /api/admin/users
- Return all users with role and created_at

GET /api/admin/stats
- Return: total_users, total_tailors, total_orders, total_revenue

PUT /api/admin/users/:id/deactivate
- Soft delete or flag user

---

STEP 11 — FRONTEND SETUP

Create React app. Install:
axios, react-router-dom, leaflet, react-leaflet, 
@stripe/stripe-js, @stripe/react-stripe-js

Create src/api/axios.js:
- Base URL: http://localhost:3001/api
- Interceptor that reads token from localStorage and 
  adds Authorization: Bearer token to every request

Create src/context/AuthContext.js:
- Store user object and token in state
- Provide login(token, user), logout() functions
- On app load, check localStorage for existing token and restore session

Set up React Router in App.js with these routes:
/ → Home (if logged in) or Landing
/login → Login screen
/register → Register screen  
/tailors → Find Tailor map screen
/tailors/:id → Tailor profile screen
/measurements → Upload photos screen
/measurements/results → Results screen
/order/new → Place order screen
/payment → Payment screen
/order/success → Success screen
/rate/:orderId → Rate tailor screen
/orders → My orders screen
/tailor/dashboard → Tailor dashboard
/admin → Admin panel

Protect routes: redirect to /login if no token.
Redirect to correct dashboard based on role after login.

---

STEP 12 — SCREEN: Landing Page

Build a beautiful landing page for non-logged-in users.

Layout:
- Full viewport height hero section
- Background: #FAFAF8 with very subtle geometric Sudanese pattern overlay
- Center content:
  - App name in Arabic: "منصة الدشداشة والجلابية" — large bold 48px
  - Subtitle in English: "Connect with the best Sudanese tailors"
  - Two buttons side by side:
    - "Login" — gold background #C9A84C, white text
    - "Create Account" — white background, gold border, gold text
- Below hero: three feature cards in a row:
  - AI Measurements with camera icon
  - Find Nearby Tailors with map icon  
  - Secure Payment with shield icon

---

STEP 13 — SCREEN: Register

Build a clean register form.

Layout:
- Centered card, max-width 420px
- App logo/name at top
- Form fields: Full Name, Email, Password, Confirm Password
- Role selector: two toggle cards — "I'm a Customer" and "I'm a Tailor"
  selected state has gold border and gold checkmark
- "Create Account" gold full-width button
- "Already have an account? Login" link at bottom
- On submit: POST to /api/auth/register
- On success: redirect to /login with success message

---

STEP 14 — SCREEN: Login

Build the login form.

Layout:
- Centered card, max-width 420px
- "Welcome Back" heading in Arabic: "مرحباً بعودتك"
- Email and Password fields
- "Login" gold full-width button
- "Don't have an account? Register" link
- On submit: POST to /api/auth/login
- Save token to localStorage
- Redirect based on role:
  - customer → /
  - tailor → /tailor/dashboard
  - admin → /admin

---

STEP 15 — SCREEN: Customer Home

Build the main home screen for customers.

Layout:
- Top bar: greeting "مرحباً, {name}" on left, notification bell on right
- Search bar below greeting
- Horizontal scrollable category pills:
  Jellabiya | Dishdasha | Embroidered | Classic | New Arrivals
  Active pill has gold background
- Section heading "Featured Designs" with "See All" link
- 2-column grid of design cards:
  Each card: image placeholder with gradient, design name, 
  price in SDG, availability badge (Available = green, Busy = amber)
- Bottom navigation bar:
  Home (active) | Find Tailor | My Orders | Profile
  Active icon is gold, inactive is gray

When a design card is clicked, navigate to /tailors 
to find a tailor for that design

---

STEP 16 — SCREEN: Find Tailor (Map)

Build the tailor finder screen with Leaflet map.

Layout:
- Full screen Leaflet map using OpenStreetMap tiles
- Map centered on Khartoum: [15.5507, 32.5322] zoom 12
- Custom gold marker pins for each tailor location
- On marker click: show popup with tailor name and rating
- Fixed top bar with back arrow and "Find a Tailor" title
- Filter chips below top bar: Nearest | Top Rated | Available
- Bottom sheet (fixed at bottom, 280px tall, scrollable):
  - "Tailors Near You" heading
  - List of tailor cards:
    Each card: avatar circle with initials, name, 
    star rating, distance in km, open/busy badge
  - On card click: navigate to /tailors/:id
- On component mount:
  - Get browser geolocation
  - Call GET /api/tailors/nearby with lat and lng
  - Display results on map and in list

---

STEP 17 — SCREEN: Tailor Profile

Build the tailor detail page.

Layout:
- Header with back arrow
- Tailor hero card:
  - Large avatar circle with initials (60px)
  - Name (18px bold)
  - Gold stars with rating number and review count
  - City name
  - Specialties as pills: Jellabiya, Dishdasha, Embroidery
- Bio section with "About" heading
- "Portfolio" section heading
- 3-column image grid showing portfolio images
  If no images: show placeholder grid with camera icon
- Reviews section: last 3 ratings with customer name, 
  stars, and comment
- Fixed bottom bar with "Order from this Tailor" 
  gold full-width button
- Button click: check if customer has measurements saved
  If yes: navigate to /order/new with tailorId
  If no: navigate to /measurements with tailorId stored in state

---

STEP 18 — SCREEN: Upload Measurements

Build the photo upload and measurement screen.

Layout:
- Top bar with "Get Your Measurements" title
- Step progress bar (4 dots, first 2 filled in gold)
- Instructions card: 
  "Stand in good lighting, wear fitted clothing, 
   take photos from 2 meters away"
- Two upload boxes side by side (or stacked on mobile):
  - Box 1: "Front View" — dashed border, camera icon, 
    tap to upload image
  - Box 2: "Side View" — dashed border, camera icon,
    tap to upload image
  - When image uploaded: show preview thumbnail in box
- Height input field: label "Your Height (cm)", 
  number input, placeholder 175
- "Analyze My Measurements" gold full-width button
  Show loading spinner while calling API
- On submit:
  - POST to /api/measurements with both images and height
  - Navigate to /measurements/results with response data

---

STEP 19 — SCREEN: Measurement Results

Build the results display screen.

Layout:
- Top bar with "Your Measurements" title
- Green success banner: "AI Analysis Complete ✓"
- Clean list of measurement rows:
  Each row: measurement name on left, value in cm on right,
  separated by dotted line
  Measurements: Chest, Waist, Hips, Shoulder Width, Height
- Info box with info icon:
  "These measurements will be automatically sent to your 
   selected tailor when you place your order"
- "Continue to Order" gold button
- "Retake Photos" text link below button
- Store measurements in component state and pass to order screen

---

STEP 20 — SCREEN: Place Order

Build the order confirmation screen.

Layout:
- Top bar with "Order Details" title
- Tailor card (compact): avatar, name, rating
- Design selection section:
  - Input or dropdown for design name/type
  - Text area for special notes
- Measurements summary card (collapsible):
  Shows key measurements in 2-column grid
- Price section:
  - Display tailor's base price
  - "Final price set by tailor after review" note in small text
- Order Summary card:
  Design, Tailor, Estimated Price in SDG
- "Place Order" gold button
- On submit: POST to /api/orders
- On success: navigate to /payment with orderId and amount

---

STEP 21 — SCREEN: Payment

Build the Stripe payment screen.

Layout:
- Top bar with "Payment" title
- Order summary card:
  Design name, Tailor name, Amount in SDG
- Divider line
- Payment form section heading "Card Details"
- Stripe CardElement component in a styled container
- Note: "Using test card: 4242 4242 4242 4242"
  show this in a small amber info box during development
- "Pay Now — SDG {amount}" gold full-width button
- "Secured by Stripe" text with lock icon at bottom
- On submit:
  - Call POST /api/payments/create to get clientSecret
  - Confirm payment with Stripe using CardElement
  - On success: call POST /api/payments/confirm
  - Navigate to /order/success

---

STEP 22 — SCREEN: Order Success

Build the success confirmation screen.

Layout:
- Centered layout, full height
- Large animated gold checkmark circle (CSS animation, 
  draws the checkmark on mount)
- "Order Placed Successfully!" heading
- "طلبك في الطريق إليك" subtitle in Arabic
- Order reference number: "Order #" + orderId
- Two buttons stacked:
  - "View My Orders" — gold, full width
  - "Rate Your Tailor" — outline, full width
    (only show if order is already done, 
     otherwise show "We'll remind you to rate later")

---

STEP 23 — SCREEN: My Orders (Customer)

Build the customer orders list.

Layout:
- Top bar with "My Orders" title
- Status filter tabs: All | Pending | In Progress | Done
- Orders list:
  Each order card:
    - Tailor avatar + name
    - Design name
    - Order date
    - Price in SDG
    - Status badge:
      Pending = amber, Confirmed = blue, 
      In Progress = purple, Done = green
    - If status is Done and not rated: 
      show "Rate Tailor" gold small button
- Empty state: "No orders yet" with illustration
- On component mount: GET /api/orders/my

---

STEP 24 — SCREEN: Rate Tailor

Build the rating submission screen.

Layout:
- Top bar with "Rate Your Tailor" title
- Tailor avatar circle (large, 64px) centered
- Tailor name and completed order design name below
- "How was your experience?" heading
- 5 large star icons in a row:
  Default: outlined gray stars
  On hover/tap: fill gold up to that star
  Selected state: filled gold stars
- Rating label below stars that changes:
  1 star = "Poor", 2 = "Fair", 3 = "Good", 
  4 = "Very Good", 5 = "Excellent"
- Text area: "Share your experience (optional)"
  placeholder: "The quality was great..."
- "Submit Rating" gold full-width button
- On submit: POST /api/ratings
- On success: show thank you message and go back to orders

---

STEP 25 — SCREEN: Tailor Dashboard

Build the tailor's main dashboard.

Layout:
- Top bar: "My Dashboard" title + tailor name
- Stats row (3 cards):
  - Pending Orders (number, amber)
  - Completed (number, green)
  - My Rating (stars + number, gold)
- Section heading "New Orders" 
- Orders list sorted by newest first:
  Each order card:
    - Customer name and avatar initials
    - Design name
    - Garment measurements summary (chest, waist)
    - Order date
    - Status badge
    - Action buttons:
      If pending: "Accept" (green) and "Decline" (red) buttons
      If confirmed: "Mark In Progress" button
      If in_progress: "Mark as Done" button
      If done: show completed checkmark
- Status update calls PUT /api/orders/:id/status
- Bottom navigation:
  Dashboard | Orders | Profile | Map (to update location)

---

STEP 26 — SCREEN: Tailor Profile Setup

Build the tailor profile edit screen.

Layout:
- Top bar with "My Profile" title
- Avatar circle with initials and "Change Photo" link below
- Form fields:
  - Bio / About Me (textarea)
  - City (text input)
  - "Set My Location on Map" button
    Opens a small Leaflet map where tailor taps to set 
    their pin location. Saves lat/lng to state.
- Portfolio section:
  - Existing portfolio images in 3-column grid
  - "Add Photo" button that opens file picker
  - On photo select: POST to /api/tailors/portfolio
- "Save Profile" gold button
- On submit: PUT /api/tailors/profile

---

STEP 27 — SCREEN: Admin Panel

Build a simple admin dashboard.

Layout:
- Top bar with "Admin Panel" title
- Stats cards row:
  Total Users | Active Tailors | Total Orders | Total Revenue SDG
- Users table:
  Columns: Name, Email, Role badge, Join Date, Actions
  Role badges: Customer=blue, Tailor=gold, Admin=gray
  Actions: Deactivate button (red outline)
- Data comes from GET /api/admin/stats and GET /api/admin/users
- Simple, clean table layout, no complex UI needed

---

FINAL STEPS:

After all screens are built:

1. Add loading spinners on all API calls using a 
   global loading state

2. Add error handling on all API calls — show a red 
   toast notification for errors

3. Add form validation on all forms — highlight empty 
   required fields in red before submitting

4. Make all screens fully responsive for mobile 375px, 
   tablet 768px, and desktop 1024px

5. Add an Axios interceptor that catches 401 Unauthorized 
   responses and automatically logs the user out and 
   redirects to /login

6. Add a simple 404 Not Found page for unknown routes

7. Test the complete flow:
   Register as customer → Login → Browse home → 
   Find tailor on map → View profile → Upload photos → 
   Get measurements → Place order → Pay → 
   See success → Rate tailor
   
   Then test tailor flow:
   Register as tailor → Set up profile and location → 
   See incoming order → Accept → Mark done

Build each screen completely before moving to the next. 
Make sure every screen connects to the real backend API. 
Do not use dummy data in the final build except for the 
initial database seed.