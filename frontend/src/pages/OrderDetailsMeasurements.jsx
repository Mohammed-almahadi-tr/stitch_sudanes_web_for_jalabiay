import React from 'react';

export default function OrderDetailsMeasurements() {
  return (
    <>
<aside className="h-screen w-64 fixed right-0 top-0 border-l-0 bg-[#f4f4f2] shadow-[1px_0_0_0_rgba(0,0,0,0.05)] flex flex-col py-8 px-4 z-50">
<div className="text-xl font-bold text-[#1a1c1b] mb-8 font-headline flex items-center gap-3">
<span className="material-symbols-outlined text-[#755b00]" data-icon="architecture">architecture</span>
            Heritage Digital
        </div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#755b00] font-bold border-r-4 border-[#755b00] bg-white/50" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Orders</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Measurements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Customers</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Settings</span>
</a>
</nav>
<div className="mt-auto">
<button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 rounded-xl font-bold text-sm shadow-sm active:scale-[0.98] transition-all">
                New Commission
            </button>
</div>
</aside>

<main className="mr-64 min-h-screen">

<header className="fixed top-0 right-64 left-0 h-20 px-10 glass-nav flex justify-between items-center border-b border-[#e8e8e6] z-40">
<div className="flex items-center gap-4">
<h1 className="text-xl font-extrabold text-on-surface font-headline">Order #JL-9821</h1>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Processing</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</div>
<div className="h-10 w-10 rounded-full bg-[#FAFAF8]-container-high border-0 bg-white shadow-sm overflow-hidden">
<img alt="Tailor Profile" className="w-full h-full object-cover" data-alt="professional headshot of a middle-aged male tailor with a warm smile in a studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-pcNWMwJ7UDefQCKYCXVHjxWO-vEXoBkWg-YygSQJS4my3uTIr-B6FDQtYC106rxQegQXZmxZ7B_EZBh3H4RpdlAKR-35FjvpGIrdycslxq-i9RWoRRcd4XZT5sxQv95eHENQomnYqkHiROOucQmgoabPrPOMh77K1SBJG4DjcLQ5NPSluIn4D02YO8JKe4UoOAbsCEHX3f3eFUaI6qcrUNpTPuU_Oy4hgBZZ8mPnikyY1TjzUlbSTjVSzYinpaZG6KWfTmSeFFv2"/>
</div>
</div>
</header>
<div className="pt-28 pb-12 px-10">

<nav className="flex gap-2 text-sm text-tertiary mb-8">
<span>Orders</span>
<span>/</span>
<span className="text-primary font-semibold">Order Details</span>
</nav>
<div className="grid grid-cols-12 gap-8 items-start">

<div className="col-span-12 lg:col-span-3 space-y-8">

<section className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl space-y-4">
<h2 className="text-sm font-bold text-tertiary uppercase tracking-widest border-b border-surface-container-high pb-2">العميل</h2>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-[#FAFAF8]-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="person">person</span>
</div>
<div>
<p className="font-bold text-lg">أحمد منصور</p>
<p className="text-xs text-tertiary">الخرطوم، السودان</p>
</div>
</div>
<div className="space-y-3 pt-4">
<div className="flex justify-between text-sm">
<span className="text-tertiary">رقم الهاتف</span>
<span className="font-medium tracking-tighter text-on-surface">+249 912 345 678</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-tertiary">تاريخ الطلب</span>
<span className="font-medium text-on-surface">12 اكتوبر 2023</span>
</div>
</div>
</section>

<section className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl space-y-4">
<h2 className="text-sm font-bold text-tertiary uppercase tracking-widest border-b border-surface-container-high pb-2">القماش المختار</h2>
<div className="relative h-40 w-full rounded-lg overflow-hidden group">
<img alt="Fabric Texture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close-up detail of high-quality white cotton fabric with a subtle herringbone texture and soft natural shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoGk3vN0t6yLEOXCKfwBRItCy0tv7j1y2Ae9PQB0tts5Bq6w_SPYEaYWW1DL-sZS4dDLQoKuVrNk8EWm_l5-CGNVr444JpievNk6Yj-WC7d956WK9pkQzFnrRj13Dq_fUShh0lhtu1hPXGo5jUtk_FwZeFxbB6SQmE0gzLIngCt6BGpHGShUHX4nZVpbbtWgNwK9oW1ZMFFi0W89PsMeJHTmiLm82xeN_o1ZTwxeYPou0yGP1Ogppn08vlW08tymEmvcIpDu09t30c"/>
<div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white text-xs font-bold">توتال إيطالي فاخر</p>
</div>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white mt-1.5"></div>
<p className="text-sm leading-relaxed text-on-surface-variant">اللون: أبيض ناصع<br/>الوزن: خفيف (صيفي)<br/>المنشأ: إيطاليا</p>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-6 space-y-6">
<section className="bg-[#FAFAF8]-container-lowest p-8 rounded-xl min-h-[600px] flex flex-col">
<div className="flex justify-between items-center mb-10">
<div>
<h2 className="text-2xl font-bold font-headline text-on-surface">بيانات القياس AI</h2>
<p className="text-sm text-tertiary">تم استخلاصها عبر المسح الضوئي الرقمي</p>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                                تعديل يدوي
                            </button>
</div>
<div className="relative flex-1 grid grid-cols-2 gap-12 items-center">

<div className="relative flex justify-center">
<div className="w-64 h-[400px] bg-[#FAFAF8]-container-low rounded-3xl relative overflow-hidden flex items-center justify-center">
<span className="material-symbols-outlined text-[200px] text-surface-container-highest" data-icon="accessibility_new">accessibility_new</span>

<div className="absolute top-[15%] w-full h-px bg-primary/20 flex justify-center">
<span className="absolute -top-3 right-0 bg-white shadow-sm border-0 bg-white shadow-sm px-2 py-0.5 rounded text-[10px] font-bold">الأكتاف</span>
</div>
<div className="absolute top-[35%] w-32 h-px bg-primary/20">
<span className="absolute -top-3 right-0 bg-white shadow-sm border-0 bg-white shadow-sm px-2 py-0.5 rounded text-[10px] font-bold">الصدر</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-[#FAFAF8] p-4 rounded-xl flex justify-between items-center group hover:bg-[#FAFAF8]-container-high transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="straighten">straighten</span>
</div>
<span className="font-bold text-on-surface">الكتف</span>
</div>
<div className="text-right">
<span className="text-xl font-extrabold text-primary">48.5</span>
<span className="text-[10px] text-tertiary mr-1 font-bold">سم</span>
</div>
</div>
<div className="bg-[#FAFAF8] p-4 rounded-xl flex justify-between items-center group hover:bg-[#FAFAF8]-container-high transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="straighten">straighten</span>
</div>
<span className="font-bold text-on-surface">محيط الصدر</span>
</div>
<div className="text-right">
<span className="text-xl font-extrabold text-primary">112.0</span>
<span className="text-[10px] text-tertiary mr-1 font-bold">سم</span>
</div>
</div>
<div className="bg-[#FAFAF8] p-4 rounded-xl flex justify-between items-center group hover:bg-[#FAFAF8]-container-high transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="straighten">straighten</span>
</div>
<span className="font-bold text-on-surface">الخصر</span>
</div>
<div className="text-right">
<span className="text-xl font-extrabold text-primary">108.4</span>
<span className="text-[10px] text-tertiary mr-1 font-bold">سم</span>
</div>
</div>
<div className="bg-[#FAFAF8] p-4 rounded-xl flex justify-between items-center group hover:bg-[#FAFAF8]-container-high transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="straighten">straighten</span>
</div>
<span className="font-bold text-on-surface">طول الكم</span>
</div>
<div className="text-right">
<span className="text-xl font-extrabold text-primary">64.2</span>
<span className="text-[10px] text-tertiary mr-1 font-bold">سم</span>
</div>
</div>
<div className="bg-[#FAFAF8] p-4 rounded-xl flex justify-between items-center group hover:bg-[#FAFAF8]-container-high transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="straighten">straighten</span>
</div>
<span className="font-bold text-on-surface">الطول الكلي</span>
</div>
<div className="text-right">
<span className="text-xl font-extrabold text-primary">152.0</span>
<span className="text-[10px] text-tertiary mr-1 font-bold">سم</span>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-surface-container flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="verified" >verified</span>
<span className="text-xs text-on-surface-variant font-medium">دقة القياس الرقمي: 98.4% - تم التحقق منها بواسطة Heritage Core Engine</span>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-3 space-y-6">

<section className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl space-y-4">
<h2 className="text-sm font-bold text-tertiary uppercase tracking-widest border-b border-surface-container-high pb-2">صور مرجعية</h2>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#FAFAF8]-container-high">
<img alt="Reference Front" className="w-full h-full object-cover" data-alt="front view portrait of a man standing naturally, used as a posture reference for tailoring measurements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9kUg6Hy8R2qEyU7Tu9sDcZXVWGRAATioLgv5Ln8piUn1JxskanqPHYNGNQOlIPgeFh_KVdSeugMErCD4bIYUDthxYpPMQH0YuGlo92wO1ZZqif35zdkH4PwptR_dd560QOOX3SF2MKDmOiaAskL8qGVR8EC-XGExMp6awgCr6ciqMSv1SlQXUq-obSuhrKNJsPJlo1yEU0EuGSje-p7PgdNW691AcCnFebAlZSicdHO-Y0ujjHZH4DnTM63MCFRXxe1dQkC-fRaAN"/>
</div>
<div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#FAFAF8]-container-high">
<img alt="Reference Side" className="w-full h-full object-cover" data-alt="side profile view of a man showing posture and shoulder alignment for tailoring reference" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHmjlR-H-X-dv6zGvmGvDMADkT6pOQfYYDiHE-_9O6MK0ohKbRh22jcuOeWJJUhDqJSYKyUzAQFZ1LDbKsH1sIBe4hEBNWxxvPRa1DoWFGwJNCLX9wPN36sqkz-GuGW8aeJ-OXMkol8xs6cFpKJnZmw7U-JZoUOmvd2RK0a_23y8pSuchi0bjrJFoecoYxBm2QuVCvy9VAFq8VQ1_SggvOydbbJ0n9-SmJWidUcj9g2yU4alMDHDaCut3I9FXFYkbWu7BpH387T-rm"/>
</div>
</div>
<p className="text-[10px] text-tertiary text-center">تم الالتقاط في 12 اكتوبر 2023 - 02:30 م</p>
</section>

<section className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl space-y-4">
<h2 className="text-sm font-bold text-tertiary uppercase tracking-widest border-b border-surface-container-high pb-2">ملاحظات خاصة</h2>
<div className="bg-[#FAFAF8]-container-high/50 p-4 rounded-lg border-r-2 border-primary">
<p className="text-sm text-on-surface leading-relaxed">العميل يفضل ياقة "قلاب" عريضة قليلاً مع أزرار مخفية. يرجى التأكد من استرخاء القماش عند منطقة الكتف.</p>
</div>
<textarea className="w-full bg-[#FAFAF8]-container-low border-none rounded-lg text-sm focus:ring-primary-container" placeholder="أضف ملاحظة جديدة..." rows="3"></textarea>
</section>

<div className="space-y-3">
<button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all">
                            تحديث حالة الطلب
                            <span className="material-symbols-outlined" data-icon="sync">sync</span>
</button>
<button className="w-full bg-[#FAFAF8]-container-high text-on-surface py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FAFAF8]-container-highest transition-colors">
                            إرسال إلى المشغل
                            <span className="material-symbols-outlined" data-icon="send">send</span>
</button>
<button className="w-full bg-transparent text-error py-2 font-semibold text-sm">
                            إلغاء الطلب
                        </button>
</div>
</div>
</div>
</div>
</main>

<button className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined" data-icon="photo_camera" >photo_camera</span>
</button>
    </>
  );
}