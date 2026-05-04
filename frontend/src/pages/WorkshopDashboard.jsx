import React from 'react';

export default function WorkshopDashboard() {
  return (
    <>
<aside className="h-screen w-64 fixed right-0 top-0 border-l-0 bg-[#f4f4f2] shadow-[1px_0_0_0_rgba(0,0,0,0.05)] flex flex-col py-8 px-4 z-50">
<div className="text-xl font-bold text-[#1a1c1b] mb-8 font-headline">
            Heritage Digital
            <span className="block text-xs font-medium text-tertiary mt-1">Premium Tailoring Management</span>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#755b00] font-bold border-r-4 border-[#755b00] bg-white/50 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-headline tracking-wide">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:text-[#1a1c1b] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="font-headline tracking-wide">Orders</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:text-[#1a1c1b] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="font-headline tracking-wide">Measurements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:text-[#1a1c1b] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-headline tracking-wide">Customers</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:text-[#1a1c1b] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-headline tracking-wide">Settings</span>
</a>
</nav>
<button className="mt-auto w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold text-sm shadow-md hover:opacity-90 active:scale-[0.99] transition-all">
            New Commission
        </button>
</aside>

<main className="pr-64 min-h-screen">

<header className="fixed top-0 left-0 w-[calc(100%-16rem)] z-40 bg-[#FAFAF8]/80 backdrop-blur-xl border-b border-[#e8e8e6] flex justify-between items-center h-20 px-10">
<div className="flex items-center gap-6">
<div className="relative group">
<span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-tertiary">search</span>
<input className="pr-12 pl-4 py-2.5 bg-[#FAFAF8]-container-high border-none rounded-full w-80 text-sm focus:ring-1 focus:ring-primary-container transition-all" placeholder="بحث عن طلب أو عميل..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="p-2 text-tertiary hover:text-primary transition-all relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 left-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-tertiary hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="flex items-center gap-3 border-r pr-6 border-outline-variant">
<div className="text-left">
<p className="text-sm font-bold text-on-surface">المعلم عثمان</p>
<p className="text-xs text-tertiary">رئيس المشغل</p>
</div>
<img className="w-10 h-10 rounded-full object-cover border-0 bg-white shadow-sm shadow-sm" data-alt="portrait of a professional mature tailor in a well-lit studio workshop with measuring tape around his neck" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvU38zyolxP4KO2yNok6cKtsfwZ4g2Wp8_tLhbAjVwGsAv_khYAoBo4dQWSZZxnakhj6VXWwp8Ihg0J5z3y_t3n8kCbmpsj0NdDZkqeJUkhW8VkgZ0SPTMxublAMDh2pWyNQGGo8-kXYiLZ5AcldIeC0U8DOMs0gQpC5worjh1-txvGF1Kmp_3bL_lEM1V5dlwnFR7kEdKueK-R5XYTG0NdIEiBWd0_iq7LkT-AP6MHm636sGjxEg4qV2WCXwcX27--BnDn4bLZiVU"/>
</div>
</div>
</header>

<div className="pt-28 pb-12 px-10 max-w-7xl mx-auto pattern-overlay min-h-screen">

<section className="mb-12 relative">
<div className="flex items-end justify-between">
<div>
<h1 className="text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-2">أهلاً بك، المعلم عثمان</h1>
<p className="text-lg text-tertiary">نظرة عامة على ورشة الخياطة ليوم السبت، 24 أكتوبر</p>
</div>
<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-2xl shadow-sm flex items-center gap-4">
<div className="p-3 bg-secondary-container rounded-full text-secondary">
<span className="material-symbols-outlined text-3xl" data-icon="trending_up">trending_up</span>
</div>
<div>
<p className="text-xs text-tertiary font-bold uppercase tracking-wider">أداء المشغل</p>
<p className="text-xl font-bold text-on-surface">+12% من الأسبوع الماضي</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-[#FAFAF8]-container-lowest p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="inventory_2">inventory_2</span>
<span className="bg-primary-container/20 text-primary text-xs font-bold px-3 py-1 rounded-full">قيد التنفيذ</span>
</div>
<div>
<p className="text-4xl font-extrabold text-on-surface mb-1">42</p>
<p className="text-tertiary font-medium">الطلبات النشطة</p>
</div>
</div>
<div className="bg-gradient-to-br from-primary to-on-primary-container p-8 rounded-3xl flex flex-col justify-between shadow-xl text-white">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-primary-fixed text-4xl" data-icon="payments">payments</span>
<span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">شهري</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<p className="text-4xl font-extrabold mb-1">850,000</p>
<span className="text-sm opacity-80">SDG</span>
</div>
<p className="text-white/80 font-medium">الأرباح الشهرية</p>
</div>
</div>
<div className="bg-[#FAFAF8]-container-lowest p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="flex text-primary">
<span className="material-symbols-outlined" data-icon="star" >star</span>
<span className="material-symbols-outlined" data-icon="star" >star</span>
<span className="material-symbols-outlined" data-icon="star" >star</span>
<span className="material-symbols-outlined" data-icon="star" >star</span>
<span className="material-symbols-outlined" data-icon="star_half">star_half</span>
</div>
<span className="bg-secondary-container/30 text-secondary text-xs font-bold px-3 py-1 rounded-full">ممتاز</span>
</div>
<div>
<p className="text-4xl font-extrabold text-on-surface mb-1">4.8</p>
<p className="text-tertiary font-medium">متوسط التقييم العام</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 space-y-12">

<section>
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold font-headline text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-error" data-icon="alarm">alarm</span>
                                طابور المهام العاجلة
                            </h2>
<button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">عرض الكل</button>
</div>
<div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide no-scrollbar">

<div className="min-w-[320px] bg-[#FAFAF8]-container-lowest p-6 rounded-2xl shadow-sm border-r-4 border-error">
<div className="flex justify-between mb-4">
<span className="text-xs font-bold text-error bg-error-container/20 px-2 py-1 rounded">خلال 4 ساعات</span>
<p className="text-xs font-medium text-tertiary">#ORD-8821</p>
</div>
<h3 className="text-lg font-bold text-on-surface mb-1">جلابية توتال بيضاء</h3>
<p className="text-sm text-tertiary mb-4">للعميل: د. أحمد إبراهيم</p>
<div className="flex justify-between items-center">
<div className="flex -space-x-2 space-x-reverse">
<img className="w-8 h-8 rounded-full border-0 bg-white shadow-sm" data-alt="professional male tailor headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtXkwvXaAPTbPtziwZj_8k60zrYVVj8wuba6tegXANthHYjLl1UpyUkxCeHFkP1xXxqFrChBjmZsFhyR4embdlnSyTDswvpzZLbD2rOSa8V1N2sA32vuMf-3YNwzicejPUwF_YoqbqHXE-DRi5e_z1mSEfSH869Ie6tK0T-WBDGiDRMm4nnEGrGu2fQR_Mrg1LHCDbpEsTYV2pD5lBo_3lFSi5W8jmP41LlOQNaNGOviyxB-ij87qR2woDOhwcrKZGJC1VsZ-mHU98"/>
<div className="w-8 h-8 rounded-full border-0 bg-white shadow-sm bg-primary-container text-[10px] font-bold flex items-center justify-center text-on-primary-container">+2</div>
</div>
<button className="px-4 py-2 bg-[#FAFAF8]-container-high text-on-surface text-xs font-bold rounded-lg">ابدأ الآن</button>
</div>
</div>

<div className="min-w-[320px] bg-[#FAFAF8]-container-lowest p-6 rounded-2xl shadow-sm border-r-4 border-primary">
<div className="flex justify-between mb-4">
<span className="text-xs font-bold text-primary bg-primary-container/20 px-2 py-1 rounded">غداً صباحاً</span>
<p className="text-xs font-medium text-tertiary">#ORD-8942</p>
</div>
<h3 className="text-lg font-bold text-on-surface mb-1">طقم زفاف كامل</h3>
<p className="text-sm text-tertiary mb-4">للعميل: م. عمر محمد</p>
<div className="flex justify-between items-center">
<div className="flex -space-x-2 space-x-reverse">
<img className="w-8 h-8 rounded-full border-0 bg-white shadow-sm" data-alt="young artisan portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdp8SV8iW_VjQwbk7YHv_rE1T2MQAdV7p9jYL14jhWSMUgrT-UItU5nHdcRyLoRsi7FzQkLUiYQYzcjX4F8FtJ41HfQeMPRH2BSq_8jjAd06fxOReVqTDRynAn4sSIh7t49aFWw4N2aoV-2hfDL0VEfqwHG7rPhKXY4t6N3ciXOR7sLM9bp_3jidtGgB0lZ_d7fU8mUnAyw4fxwGSCMqBqd-tEfcHcjqJqYsC3n-PWgU08fXpUTnGzSRyXpbbdVZxPEZeYVQbheNSL"/>
</div>
<button className="px-4 py-2 bg-[#FAFAF8]-container-high text-on-surface text-xs font-bold rounded-lg">قيد التحضير</button>
</div>
</div>

<div className="min-w-[320px] bg-[#FAFAF8]-container-lowest p-6 rounded-2xl shadow-sm border-r-4 border-primary">
<div className="flex justify-between mb-4">
<span className="text-xs font-bold text-primary bg-primary-container/20 px-2 py-1 rounded">غداً مساءً</span>
<p className="text-xs font-medium text-tertiary">#ORD-9011</p>
</div>
<h3 className="text-lg font-bold text-on-surface mb-1">جلابية أطفال ملونة</h3>
<p className="text-sm text-tertiary mb-4">للعميل: السيدة سارة ياسر</p>
<div className="flex justify-between items-center">
<div className="flex -space-x-2 space-x-reverse">
<img className="w-8 h-8 rounded-full border-0 bg-white shadow-sm" data-alt="tailor assistant photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsrphBa4bwDu1tPU_25PXLbxoaf6mV7gs5KjEpnRe1Csrn1-FaMcCSd0FslisJ6llEwypUXVeKtjAhM-FlEB9DiG0Mbp8dg2Vd5q9WV68YtfZAvZZosacZ_y0Zks_XFSjnMhflneU5S-wa5329hcR65BW1uwHbK1y5e8vROKJxTJdXx_x7aNYyYw2WqoQzcD8p9Ohggtil7uo5NOoREvXTi31b5o29Sy7ry4dATzmZtv7WEIbURO1DMW0-CyWWlues3ZlfszNwlBrD"/>
</div>
<button className="px-4 py-2 bg-[#FAFAF8]-container-high text-on-surface text-xs font-bold rounded-lg">في الانتظار</button>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-bold font-headline text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="history">history</span>
                            النشاط الأخير في المشغل
                        </h2>
<div className="bg-[#FAFAF8]-container-lowest rounded-3xl p-8 space-y-8 shadow-sm">
<div className="flex gap-4">
<div className="relative">
<div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div className="absolute top-10 right-1/2 w-0.5 h-10 bg-[#FAFAF8]-container-highest"></div>
</div>
<div>
<p className="text-on-surface font-bold">تم الانتهاء من خياطة الطلب #8765</p>
<p className="text-sm text-tertiary">بواسطة المساعد حسن - منذ 15 دقيقة</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="add_a_photo">add_a_photo</span>
</div>
<div className="absolute top-10 right-1/2 w-0.5 h-10 bg-[#FAFAF8]-container-highest"></div>
</div>
<div>
<p className="text-on-surface font-bold">تم إضافة قياسات جديدة للعميل: ياسين طه</p>
<p className="text-sm text-tertiary">عبر التطبيق - منذ ساعة واحدة</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-error-container rounded-full flex items-center justify-center text-error">
<span className="material-symbols-outlined" data-icon="error">error</span>
</div>
<div>
<p className="text-on-surface font-bold">تأخير في استلام قماش التوتال السويسري</p>
<p className="text-sm text-tertiary">إخطار من المورد - منذ 3 ساعات</p>
</div>
</div>
</div>
</section>
</div>

<div className="space-y-8">

<section className="bg-[#FAFAF8]-container-low p-8 rounded-3xl">
<h2 className="text-xl font-bold font-headline text-on-surface mb-6">ضغط العمل الحالي</h2>
<div className="relative w-48 h-48 mx-auto mb-6">

<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" stroke-width="12"></circle>
<circle className="text-primary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" stroke-dasharray="502" stroke-dashoffset="125" stroke-width="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-extrabold text-on-surface">75%</span>
<span className="text-xs text-tertiary font-bold">مشغول</span>
</div>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm">
<span className="flex items-center gap-2 text-tertiary">
<span className="w-2 h-2 rounded-full bg-primary"></span> ماكينات الخياطة
                                </span>
<span className="font-bold">9/12</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="flex items-center gap-2 text-tertiary">
<span className="w-2 h-2 rounded-full bg-secondary"></span> قسم التطريز
                                </span>
<span className="font-bold">3/5</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="flex items-center gap-2 text-tertiary">
<span className="w-2 h-2 rounded-full bg-primary-container"></span> قسم الكي والتغليف
                                </span>
<span className="font-bold">2/4</span>
</li>
</ul>
</section>

<section className="bg-[#FAFAF8]-container-lowest p-6 rounded-3xl shadow-sm">
<h2 className="text-lg font-bold font-headline mb-4">أهم الأقمشة المتاحة</h2>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-cover bg-center" data-alt="close up of premium white cotton fabric texture" ></div>
<div className="flex-1">
<p className="text-xs font-bold text-on-surface">توتال سويسري فائق</p>
<div className="w-full h-1.5 bg-[#FAFAF8]-container-high rounded-full mt-1">
<div className="w-1/4 h-full bg-error rounded-full"></div>
</div>
</div>
<span className="text-[10px] font-bold text-error">منخفض</span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-cover bg-center" data-alt="close up of cream linen fabric weave" ></div>
<div className="flex-1">
<p className="text-xs font-bold text-on-surface">كتان ياباني كريمي</p>
<div className="w-full h-1.5 bg-[#FAFAF8]-container-high rounded-full mt-1">
<div className="w-3/4 h-full bg-secondary rounded-full"></div>
</div>
</div>
<span className="text-[10px] font-bold text-secondary">جيد</span>
</div>
</div>
<button className="w-full mt-6 py-2.5 text-xs font-bold text-primary border-0 bg-white shadow-sm rounded-xl hover:bg-[#FAFAF8]-container-low transition-colors">إدارة المخزون</button>
</section>
</div>
</div>
</div>
</main>
    </>
  );
}