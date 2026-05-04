import React from 'react';

export default function Screen3() {
  return (
    <>
<header className="fixed top-0 right-0 left-0 h-16 flex items-center justify-between px-6 z-40 flex-row-reverse bg-[#faf6f0] dark:bg-stone-900 shadow-sm border-b border-stone-200 dark:border-stone-800">
<div className="flex items-center gap-4">
<span className="text-[#4a7c59] dark:text-emerald-500 font-['Literata'] font-semibold text-lg">Terra Tailors</span>
<div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors p-2 rounded-full cursor-pointer active:scale-95 duration-200" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors p-2 rounded-full cursor-pointer active:scale-95 duration-200" data-icon="settings">settings</button>
<img alt="Admin Profile" className="w-8 h-8 rounded-full border-0 bg-white shadow-sm" data-alt="Close-up portrait of a professional Sudanese man in a stylish office setting with warm natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDif6wUbiufdKJUmcdRe-kC7XCPIMbqehEQ2otOl5RuwicXUmrnhd55uBFg228O6lx_uYtsvzrX9izAP3sA8f5lOioIFZ2PajToQBxTMuHeP-i7q9t_0oBHP0zC1SsETn1x4LOGVV8UTd4sS4Tl1UzWb4DGy8X9V8Q-09AU71AIRYJ6DpRYir3s_gtxv5RzE4S_FZ9LQvwBjKndvl6Cs8CijoSJuqMBpDeqUUN7kijlJhCwzJ4-_crFAJujwDHXW5kLl32LmgsZ90dl"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<input className="bg-[#FAFAF8]-container border-none rounded-full py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-primary w-64" placeholder="بحث في التقارير..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant" data-icon="search">search</span>
</div>
</div>
</header>

<aside className="fixed right-0 top-0 h-screen w-64 flex flex-col p-4 z-50 overflow-y-auto bg-[#faf6f0] dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 font-['Nunito_Sans'] text-right">
<div className="flex items-center gap-3 mb-10 px-2">
<div className="w-10 h-10 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white rounded-lg flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
</div>
<div>
<h2 className="font-['Literata'] text-xl text-[#4a7c59] leading-none">ترا للملابس</h2>
<p className="text-xs text-stone-500 mt-1">إدارة الخياطة</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>لوحة القيادة</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>المستخدمين</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
<span>الخياطين</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span>الطلبات</span>
</a>

<a className="flex items-center gap-3 p-3 bg-[#4a7c59]/10 text-[#4a7c59] font-bold rounded-xl transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>التحليلات</span>
</a>
</nav>
<div className="mt-auto border-t border-stone-200 pt-4 space-y-2">
<button className="w-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 mb-4 hover:shadow-md transition-shadow">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span>طلب جديد</span>
</button>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>الإعدادات</span>
</a>
<a className="flex items-center gap-3 p-3 text-error" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>تسجيل الخروج</span>
</a>
</div>
</aside>

<main className="mr-64 pt-24 px-8 pb-12 min-h-screen">

<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-on-background">التقارير والتحليلات</h1>
<p className="text-stone-500 mt-2 font-body">نظرة شاملة على أداء الأعمال والمبيعات عبر المناطق.</p>
</div>
<button className="bg-[#FAFAF8]-container border-0 bg-white shadow-sm text-primary px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined" data-icon="picture_as_pdf">picture_as_pdf</span>
<span>تحميل التقرير PDF</span>
</button>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

<div className="bg-[#FAFAF8]-container-low rounded-xl p-6 shadow-[0_4px_20px_rgba(46,50,48,0.06)] relative overflow-hidden group">
<div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="flex justify-between items-start relative">
<div>
<p className="text-tertiary font-bold mb-1">أفضل خياط أداءً</p>
<h3 className="text-2xl font-bold text-on-background">أحمد المصطفى</h3>
<p className="text-primary font-semibold mt-2">124 طلب مكتمل هذا الشهر</p>
</div>
<img alt="Tailor Profile" className="w-16 h-16 rounded-full object-cover border-0 bg-white shadow-sm" data-alt="Professional tailor working with measuring tape around neck in a warm, boutique studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fKjql-_n9Syy6hmIM8tkxtFZc9WIqCBf-oYG0KUMDuQ1sbOkwc6oBGL7GrofdfzjQaVrsqo816rgvu-CLmVPjANe88HUsn4hUoiM-1CstnK62Ho8bIztuKGOqWDwOzSSC6RELt2ejVDVHnBjFr09wldnf5Jq3LdXSukuGb5IwxUXvNe1AfttQ2cPyV2UlosVWfNu28MjYXrnjKhMFzJW7PiGUE9Eeod6OsO-MdzP-xT4hM_HKf7B1BDmfo-9NgMi8vYeylYT3eO_"/>
</div>
<div className="mt-6 flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary" data-icon="star" >star</span>
<span className="font-bold">4.9/5.0</span>
<span className="text-stone-400 text-sm">(230 تقييم)</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-low rounded-xl p-6 shadow-[0_4px_20px_rgba(46,50,48,0.06)] relative overflow-hidden">
<p className="text-tertiary font-bold mb-4">التصميم الأكثر مبيعاً</p>
<div className="flex gap-4">
<div className="w-24 h-32 rounded-lg bg-[#FAFAF8]-container-highest overflow-hidden">
<img alt="Top Design" className="w-full h-full object-cover" data-alt="Traditional Sudanese Jalabiya with modern embroidery details on high-quality white linen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepKpGd7nFJSxrC_19inCkEJ1XkgcjsfvoCFIaFOJ3D7eJZTE19j4dDYolYu4ZHPi-pHd2K4km7JRGrH7h_CmW67viPpcUbhFj5_aerCzMbBFFv15ZnXkGDVqTmsPuzc-vfUdnQ6OBs_WzdwZzJ_BGWlC4hHhrGuFkjV-_mHXfXsaH3o6WqfLtOViNL34CGkW5K2MPgbaku7oDmk7-3csBYeTI8BDa4HhaN0LTcJ7sxYaLG7h4l7XTmqzBek7Ywjul_wJjqSddb3lK"/>
</div>
<div className="flex-1">
<h3 className="text-xl font-bold">جلابية "كلاسيك مودرن"</h3>
<p className="text-stone-500 text-sm mt-1">الموسم: صيف 2024</p>
<div className="mt-4">
<span className="text-2xl font-bold text-primary">45,000</span>
<span className="text-sm text-stone-500">جنية سوداني</span>
</div>
<p className="text-xs text-stone-400 mt-2">تم بيع 450 قطعة</p>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary rounded-xl p-6 shadow-md">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
<span className="bg-white/20 px-2 py-1 rounded text-xs">+12% عن الشهر الماضي</span>
</div>
<p className="text-primary-fixed-dim text-sm">إجمالي المبيعات السنوية</p>
<h3 className="text-3xl font-bold mt-1">2,450,000 SDG</h3>
</div>
</div>

<div className="col-span-12 lg:col-span-8">
<div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(46,50,48,0.06)] h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold">توزيع الطلبات في السودان</h3>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-xs text-stone-500">
<span className="w-3 h-3 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white rounded-full"></span> عالي
                            </span>
<span className="flex items-center gap-1 text-xs text-stone-500">
<span className="w-3 h-3 bg-primary/40 rounded-full"></span> متوسط
                            </span>
</div>
</div>
<div className="relative w-full h-[400px] bg-[#FAFAF8]-container rounded-lg overflow-hidden border-0 bg-white shadow-sm">
<img className="w-full h-full object-cover opacity-60" data-alt="High quality satellite map view showing Khartoum and the Nile river, desaturated with overlay markers" data-location="Khartoum" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUJxqt_foGhyK0q_-JjT9j2NKJ3-ZWlr2ipee3xpS57JOFqJcC8P3okNBRJLi71lOMcPKHvmmCL0T19CYJPt9beDrDUeOoq1sNcDi1xlkSWX-_QaQi2dq9-7GL-kpawUZ4FofkZKY2kDcIEtuJ9Z6BzUKrKWPnoHI7AOF29kx5T4tBc6cgC2Oaye2LvvGgEKjNiBj0Zgg3PY5psKSmvecCvRepTwf_KoYHlEWn0wTgMCbT3jDYUByGlGspKn8XP9ACO_gousAFhSkz"/>

<div className="absolute top-[45%] right-[48%] flex flex-col items-center">
<div className="w-4 h-4 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white rounded-full animate-pulse"></div>
<div className="mt-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-bold">الخرطوم (45%)</div>
</div>
<div className="absolute top-[48%] right-[42%] flex flex-col items-center">
<div className="w-3 h-3 bg-primary/60 rounded-full"></div>
<div className="mt-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-bold">أم درمان (30%)</div>
</div>
<div className="absolute top-[52%] right-[51%] flex flex-col items-center">
<div className="w-2 h-2 bg-primary/40 rounded-full"></div>
<div className="mt-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-bold">بحري (15%)</div>
</div>
<div className="absolute bottom-[20%] right-[30%] flex flex-col items-center">
<div className="w-2 h-2 bg-primary/20 rounded-full"></div>
<div className="mt-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-bold">بورتسودان (10%)</div>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm">
<p className="text-xs text-stone-500">الخرطوم</p>
<p className="text-lg font-bold text-primary">1,240 طلب</p>
</div>
<div className="p-4 rounded-xl bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm">
<p className="text-xs text-stone-500">أم درمان</p>
<p className="text-lg font-bold text-primary">850 طلب</p>
</div>
<div className="p-4 rounded-xl bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm">
<p className="text-xs text-stone-500">بورتسودان</p>
<p className="text-lg font-bold text-primary">320 طلب</p>
</div>
</div>
</div>
</div>

<div className="col-span-12">
<div className="bg-[#FAFAF8]-container-low rounded-xl p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)] border-0 bg-white shadow-sm">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-bold">تحليل المبيعات الشهرية</h3>
<p className="text-stone-500 text-sm mt-1">مقارنة أداء النصف الأول من العام</p>
</div>
<div className="flex gap-4">
<select className="bg-white border-0 bg-white shadow-sm rounded-lg px-4 py-2 text-sm focus:ring-primary">
<option>عام 2024</option>
<option>عام 2023</option>
</select>
</div>
</div>
<div className="relative h-64 flex items-end justify-between px-4 gap-4">

<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-lg h-[40%] group-hover:bg-primary/30 transition-colors relative">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">120K</span>
</div>
<span className="text-xs text-stone-400">يناير</span>
</div>

<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-lg h-[60%] group-hover:bg-primary/30 transition-colors relative">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">185K</span>
</div>
<span className="text-xs text-stone-400">فبراير</span>
</div>

<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-lg h-[55%] group-hover:bg-primary/30 transition-colors relative">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">160K</span>
</div>
<span className="text-xs text-stone-400">مارس</span>
</div>

<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary/80 rounded-t-lg h-[85%] relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-background text-white px-2 py-1 rounded text-[10px] font-bold">الأعلى: 310K</div>
</div>
<span className="text-xs font-bold text-primary">أبريل</span>
</div>

<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-lg h-[70%] group-hover:bg-primary/30 transition-colors relative">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">220K</span>
</div>
<span className="text-xs text-stone-400">مايو</span>
</div>

<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-lg h-[65%] group-hover:bg-primary/30 transition-colors relative">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">195K</span>
</div>
<span className="text-xs text-stone-400">يونيو</span>
</div>
</div>
<div className="mt-8 grid grid-cols-4 gap-4 pt-8 border-t border-stone-100">
<div className="text-center">
<p className="text-stone-400 text-xs mb-1">متوسط الطلب</p>
<p className="text-lg font-bold">12,500 SDG</p>
</div>
<div className="text-center">
<p className="text-stone-400 text-xs mb-1">وقت التنفيذ</p>
<p className="text-lg font-bold">4.2 أيام</p>
</div>
<div className="text-center">
<p className="text-stone-400 text-xs mb-1">عملاء جدد</p>
<p className="text-lg font-bold text-primary">+1,204</p>
</div>
<div className="text-center">
<p className="text-stone-400 text-xs mb-1">معدل الإرجاع</p>
<p className="text-lg font-bold text-error">2.1%</p>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}