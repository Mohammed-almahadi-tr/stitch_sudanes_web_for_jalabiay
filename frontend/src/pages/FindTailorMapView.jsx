import React from 'react';

export default function FindTailorMapView() {
  return (
    <>
<header className="w-full top-0 sticky z-50 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="font-['Be_Vietnam_Pro'] font-bold text-lg dark:text-white">مرحباً، محمد</h1>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full overflow-hidden border-0 bg-white shadow-sm">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a stylish Sudanese man wearing a traditional white jellabiya, smiling warmly against a soft-focus architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kGMe14hkkp4ZKdcXwXsRiWYwdhua0JVrgCWiqwhUPRl_QggAmknZQAdqDgTs7xyWeF38YTzQMZvW4VFnwrXIJu2ISQK_irFyFneA-AHXrdQpWeVryLcyPNMFIExpO2DudynKNCCibdKbq6yNf4s0VcsPy1lQprepvk6N1CLkxnPoK75elKbJxieDLJUJDfsGtL8BVqRyzOlwuVEmVKDrItCi3ds70fnw8X8Zj1jlrdWf8uTQkBYDdxGZLmwoxKYs5z1vhCzg1B-R"/>
</div>
</div>
</header>

<main className="relative flex-grow w-full overflow-hidden">

<div className="absolute top-4 left-0 right-0 z-20 flex justify-center gap-2 px-6 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-2 bg-[#FAFAF8]-container-lowest text-primary px-4 py-2 rounded-full shadow-sm text-sm font-semibold whitespace-nowrap border-0 bg-white shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="near_me">near_me</span>
                الأقرب
            </button>
<button className="flex items-center gap-2 bg-white/80 backdrop-blur-md text-on-surface px-4 py-2 rounded-full shadow-sm text-sm font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]" data-icon="star">star</span>
                الأعلى تقييماً
            </button>
<button className="flex items-center gap-2 bg-white/80 backdrop-blur-md text-on-surface px-4 py-2 rounded-full shadow-sm text-sm font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]" data-icon="bolt">bolt</span>
                متاح الآن
            </button>
</div>

<div className="absolute inset-0 z-0 bg-[#FAFAF8]-container-highest">
<img alt="Map view" className="w-full h-full object-cover opacity-60 grayscale-[20%]" data-alt="Stylized minimal map of Khartoum city with warm beige tones, clean streets, and artistic subtle grain texture, openstreetmap style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7bsH02OJVNnBz0rkA3YIbw2nOctaCn8Mq45kEfCeK4Sbs_OHeO5KnhCpo0puXZ_5Lsazg9s47EVJqjs9yqCeGsKCl7r_jwMNxsJKHUUshIjK7xYaB4Mny1gGGYXpn4rYZtgKHGolMcFdbO_BOyu3jP_TaS186ynhVDef1r0mP05m__RCWWlyHHK_9H-vAx4kxQxAjpDh-91hZ7AaZjDzHik1SKk03flsbalalqVA2CSNBWc9do0funui_F07wqkvaySy35ccD6gkt"/>

<div className="absolute top-[35%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
<div className="relative flex flex-col items-center">
<div className="w-10 h-10 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white rounded-full border-4 border-white flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-white text-[20px]" data-icon="straighten" >straighten</span>
</div>
<div className="w-1 h-2 bg-primary"></div>
</div>
</div>
<div className="absolute top-[55%] left-[65%] transform -translate-x-1/2 -translate-y-1/2">
<div className="relative flex flex-col items-center">
<div className="w-10 h-10 bg-primary-container rounded-full border-4 border-white flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-on-primary-container text-[20px]" data-icon="straighten" >straighten</span>
</div>
<div className="w-1 h-2 bg-primary-container"></div>
</div>
</div>
<div className="absolute top-[20%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
<div className="relative flex flex-col items-center">
<div className="w-10 h-10 bg-primary-container rounded-full border-4 border-white flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-on-primary-container text-[20px]" data-icon="straighten" >straighten</span>
</div>
<div className="w-1 h-2 bg-primary-container"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-30 bg-[#FAFAF8]-container-lowest rounded-t-[24px] bottom-sheet-shadow max-h-[60%] flex flex-col">

<div className="w-full flex justify-center py-3">
<div className="w-12 h-1.5 bg-outline-variant/30 rounded-full"></div>
</div>

<div className="px-6 pb-4">
<h2 className="font-headline font-bold text-xl text-on-surface">خياطون بالقرب منك</h2>
<p className="text-sm text-tertiary">تم العثور على ٣ خياطين متميزين</p>
</div>

<div className="overflow-y-auto px-6 pb-24 space-y-4">

<div className="bg-[#FAFAF8]-container-low rounded-xl p-4 flex items-center justify-between group hover:bg-white transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xl font-headline border-0 bg-white shadow-sm">
                            أ.ع
                        </div>
<div>
<h3 className="font-bold text-on-surface text-lg">أحمد عثمان</h3>
<div className="flex items-center gap-2 text-sm">
<span className="flex items-center text-primary">
<span className="material-symbols-outlined text-[16px]" data-icon="star" >star</span>
<span className="mr-1">4.9</span>
</span>
<span className="text-outline">•</span>
<span className="text-tertiary">0.8 كم</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[11px] font-bold rounded-full uppercase tracking-tight">متاح</span>
<button className="text-primary hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined" data-icon="arrow_back_ios" >arrow_back_ios</span>
</button>
</div>
</div>

<div className="bg-[#FAFAF8]-container-low rounded-xl p-4 flex items-center justify-between group hover:bg-white transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary font-bold text-xl font-headline border-0 bg-white shadow-sm">
                            ي.ط
                        </div>
<div>
<h3 className="font-bold text-on-surface text-lg">ياسر الطيب</h3>
<div className="flex items-center gap-2 text-sm">
<span className="flex items-center text-primary">
<span className="material-symbols-outlined text-[16px]" data-icon="star" >star</span>
<span className="mr-1">4.7</span>
</span>
<span className="text-outline">•</span>
<span className="text-tertiary">1.2 كم</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-3 py-1 bg-error-container text-on-error-container text-[11px] font-bold rounded-full uppercase tracking-tight">مشغول</span>
<button className="text-primary hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined" data-icon="arrow_back_ios" >arrow_back_ios</span>
</button>
</div>
</div>

<div className="bg-[#FAFAF8]-container-low rounded-xl p-4 flex items-center justify-between group hover:bg-white transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl font-headline border-0 bg-white shadow-sm">
                            م.ف
                        </div>
<div>
<h3 className="font-bold text-on-surface text-lg">محمد فضل</h3>
<div className="flex items-center gap-2 text-sm">
<span className="flex items-center text-primary">
<span className="material-symbols-outlined text-[16px]" data-icon="star" >star</span>
<span className="mr-1">4.8</span>
</span>
<span className="text-outline">•</span>
<span className="text-tertiary">2.5 كم</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[11px] font-bold rounded-full uppercase tracking-tight">متاح</span>
<button className="text-primary hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined" data-icon="arrow_back_ios" >arrow_back_ios</span>
</button>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-800 rounded-t-2xl shadow-[0_-4px_12px_rgba(26,28,27,0.04)]">
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold">الرئيسية</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10 rounded-xl px-3 py-1 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="straighten">straighten</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold">الخياطين</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="shopping_bag">shopping_bag</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold">طلباتي</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold">حسابي</span>
</a>
</nav>

<div className="fixed bottom-32 left-6 z-40">
<button className="w-14 h-14 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="my_location">my_location</span>
</button>
</div>
    </>
  );
}