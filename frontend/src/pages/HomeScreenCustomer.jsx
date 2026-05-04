import React from 'react';

export default function HomeScreenCustomer() {
  return (
    <>
<header className="w-full top-0 sticky z-40 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#755b00] dark:text-[#C9A84C] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-150" data-icon="menu">menu</span>
<h1 className="font-headline font-bold text-lg dark:text-white leading-tight">مرحباً، محمد</h1>
</div>
<div className="relative w-10 h-10 rounded-full overflow-hidden border-0 bg-white shadow-sm">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="close-up portrait of a smiling middle-eastern man with a neat beard, soft studio lighting on a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa0i0hsSJWbQxbeBShU8lAyiF9r1hYokUgYM6guCmklzkfQHJJ9ASVdy0Z3f34q78PuW6oKnieioV0JUPhqD6ZBuF2tI9b5V5124yNu66qyW0WFNngjn6HaEKwSZjxh5B9YfXL8p65mOZTvOMezAc1ivl015Ee_RDO120A0gG8GzgkVhChXMXi5bUys2JmjFv99icJBOrnWG1fdIZ0Bs6Mo_6uBnyZ_PDNw3jxOGpi-biCr_dzfniNZOY8j-PXYpQbtBr0btHoxxaQ"/>
</div>
</header>
<main className="pb-24 pt-2">

<section className="px-6 mb-8">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute right-4 text-outline" data-icon="search">search</span>
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-4 pr-12 pl-4 text-on-surface-variant focus:ring-2 focus:ring-primary placeholder:text-neutral-400" placeholder="ابحث عن خياط أو تصميم..." type="text"/>
</div>
</section>

<section className="mb-10">
<div className="flex items-center justify-between px-6 mb-4">
<h2 className="font-headline font-bold text-xl text-on-surface">التصنيفات</h2>
<button className="text-primary text-sm font-semibold hover:opacity-80">عرض الكل</button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar px-6">
<div className="flex flex-col items-center gap-2 min-w-[84px]">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-low flex items-center justify-center border-0 bg-white shadow-sm">
<span className="material-symbols-outlined text-primary text-2xl" data-icon="checkroom">checkroom</span>
</div>
<span className="text-xs font-semibold text-primary">الكل</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[84px]">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-2xl" data-icon="styler">styler</span>
</div>
<span className="text-xs font-semibold text-tertiary">جلابية</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[84px]">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-2xl" data-icon="apparel">apparel</span>
</div>
<span className="text-xs font-semibold text-tertiary">دشداشة</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[84px]">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-2xl" data-icon="texture">texture</span>
</div>
<span className="text-xs font-semibold text-tertiary">مطرز</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[84px]">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-2xl" data-icon="history_edu">history_edu</span>
</div>
<span className="text-xs font-semibold text-tertiary">كلاسيك</span>
</div>
</div>
</section>

<section className="px-6 mb-10">
<div className="hero-gradient rounded-2xl p-6 relative overflow-hidden flex flex-col justify-end min-h-[180px] shadow-lg">
<div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<span className="bg-white/20 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider mb-2 inline-block">مجموعة العيد</span>
<h3 className="text-white font-headline font-bold text-2xl mb-1">تصاميم التراث السوداني</h3>
<p className="text-white/80 text-sm mb-4">اكتشف أحدث الموديلات لهذا الموسم</p>
<button className="bg-white text-primary font-bold px-6 py-2 rounded-lg text-sm active:scale-95 transition-transform">تصفح الآن</button>
</div>
<img alt="Sudanese Fabric Texture" className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-40 mask-linear-gradient" data-alt="close-up of intricate gold and cream embroidery on high-quality white cotton fabric, showing detailed craftsmanship" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvsGWMXMMe_VjHQDibhdi1CKl76O9SBU_iTVu2mEC5XwR3a5Ah-n_dbAb5Hm5db3jTXrgBs7WbMUlbAyFukDVmepiXIwayn_AGpzYwc4a5NxH9nSQnKDPzOSsB8F3tmDkVmmQwGSQsG7mA4buowxvp4xEZ02wmJTjCkAXeEGvyOqTdwNuMxVeQB81Q6nTDJDptjuhNwx50oiYnAyc357_uuxQSDQ3Lfl--GutCHV4mSHWglaW_4vKrNYeT2OR3p7zs-dVPcxhTTgl" />
</div>
</section>

<section className="px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline font-bold text-xl text-on-surface">أبرز التصاميم</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full bg-[#FAFAF8]-container-low text-tertiary">
<span className="material-symbols-outlined" data-icon="tune">tune</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-[#FAFAF8]-container-lowest rounded-xl overflow-hidden flex flex-col">
<div className="relative h-48">
<img alt="Classic White Jellabiya" className="w-full h-full object-cover" data-alt="a professional photograph of a traditional elegant white sudanese jellabiya displayed on a minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88Yf3BUAjRT1PlT68g5alR_IODH5_EUYJBIwhbbevkrDCqyrpofzUxe6B47cCld8y3ya3piR_H-M6YzjYfu8md5vu-wFRd9dXZYdvn0UadyCfZCy8-qV0naYPSda-Z-HsUW3MhgBBOhi68kITBPWD1R7fqz6HF0biJ7RIOB-uDhbw-xcz35CB4ZQHN5H0roT23QYY7otpQh96M053-0cKwIPiLEpHbtOJOAtq5-zPSPY4MbTp8kFXntfP041r-xLkyO1lgvFM7jup"/>
<div className="absolute top-2 right-2 bg-secondary/90 text-white text-[10px] font-bold px-2 py-1 rounded-md">متاح</div>
<button className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm" data-icon="favorite">favorite</span>
</button>
</div>
<div className="p-4">
<h4 className="font-bold text-sm text-on-surface mb-1 truncate">جلابية كلاسيك ملكي</h4>
<div className="flex items-baseline gap-1">
<span className="text-primary font-bold text-base">25,000</span>
<span className="text-[10px] text-tertiary">ج.س</span>
</div>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest rounded-xl overflow-hidden flex flex-col">
<div className="relative h-48">
<img alt="Embroidered Linen Design" className="w-full h-full object-cover" data-alt="high fashion editorial shot of light grey linen fabric with sophisticated dark grey embroidery details on the collar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz5zIqsCnbqkB9xbCQVog-_CZaDmS--0tyvL-ONDwRoeKFHU1QzkPQ4CZXKIvZMYz4u46_bcrcaalup3ftbUpbcbIxQLeXdGF9obATvauGE40pw1W8gyizPMXt6f7eQO7AW4x5I73wfetzjFuHltCaPiEEHkdzo3tKcG0uCjlXJ5jrRakLVwUpc16ytft2G8R3sP4l4tjhY_EeALetIvQmn9SySOHthifOamdkcGBdEbRmFKj74lkyrmp1qH0mnrcpma_-Zvb_AJD2"/>
<div className="absolute top-2 right-2 bg-secondary/90 text-white text-[10px] font-bold px-2 py-1 rounded-md">متاح</div>
<button className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm" data-icon="favorite">favorite</span>
</button>
</div>
<div className="p-4">
<h4 className="font-bold text-sm text-on-surface mb-1 truncate">كتان مطرز يدوي</h4>
<div className="flex items-baseline gap-1">
<span className="text-primary font-bold text-base">32,500</span>
<span className="text-[10px] text-tertiary">ج.س</span>
</div>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest rounded-xl overflow-hidden flex flex-col">
<div className="relative h-48">
<img alt="Modern Dishdasha" className="w-full h-full object-cover" data-alt="detail shot of a modern dark blue dishdasha with sharp tailoring and luxury pearl buttons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVXHNHg954RT7EmH-PomabCY-fxF5RFa7mQq8uSh1MGHjRVfxjRMDA0jMAxsOiAUEyoa5zmN9Rhw-MoyCiHNIKsASPQPn5d5NgfoTJSw6h6bMMwxNbPAz28S3WKYK8WqAlyy9XLOGDVXlDp5V5GeS_wb-BDKZEyjyjduWB7VQVn_qbciRATePp0yTxT-9K4RW_pMRC9wD8XgU216kd1ldvlEIxBljAEKsbHpXIDwNtUdXXKGcb8beJvJV-h1xDWsEXWM0CmwYB79iY"/>
<div className="absolute top-2 right-2 bg-secondary/90 text-white text-[10px] font-bold px-2 py-1 rounded-md">متاح</div>
<button className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm" data-icon="favorite">favorite</span>
</button>
</div>
<div className="p-4">
<h4 className="font-bold text-sm text-on-surface mb-1 truncate">دشداشة كويتية فاخرة</h4>
<div className="flex items-baseline gap-1">
<span className="text-primary font-bold text-base">28,000</span>
<span className="text-[10px] text-tertiary">ج.س</span>
</div>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest rounded-xl overflow-hidden flex flex-col">
<div className="relative h-48">
<img alt="Silk Cotton Blend" className="w-full h-full object-cover" data-alt="folded premium textiles in shades of cream and beige with soft shadows and rich texture depth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5tJZsjtBy4TS1WDxzSqzjnBexEzA_9jQqh28-tivtbgyULfZYoXuiDCE6b9f16pChIKZ7t3RgHD_yioy9ORxKiNcOW9zgcisL2dhyVWqiqetpK6efZPPI2P0LCOPjWczR02WM9fDc62m_uDit9yiCZFCoI9fNG1eZrAsURNORP-Fu1Y8UpM0TdWBkmRwWH1avB4YBP8HPnlD3pB3JFEmFm293LhGQlBVbhKtB0nxwCTCgcbPjXsNNTliU0GS50JPiOrnqVDT-oia"/>
<div className="absolute top-2 right-2 bg-error text-white text-[10px] font-bold px-2 py-1 rounded-md">طلب مسبق</div>
<button className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm" data-icon="favorite">favorite</span>
</button>
</div>
<div className="p-4">
<h4 className="font-bold text-sm text-on-surface mb-1 truncate">حرير قطني ممتاز</h4>
<div className="flex items-baseline gap-1">
<span className="text-primary font-bold text-base">40,000</span>
<span className="text-[10px] text-tertiary">ج.س</span>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-800 shadow-[0_-4px_12px_rgba(26,28,27,0.04)] rounded-t-2xl">
<a className="flex flex-col items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10 rounded-xl px-3 py-1 scale-90 duration-200 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="home" >home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الرئيسية</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الخياطين</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">طلباتي</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">حسابي</span>
</a>
</nav>
    </>
  );
}