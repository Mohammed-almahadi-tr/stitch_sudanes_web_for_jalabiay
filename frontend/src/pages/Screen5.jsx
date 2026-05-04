import React from 'react';

export default function Screen5() {
  return (
    <>
<aside className="fixed right-0 top-0 h-full w-64 bg-[#faf6f0] border-l border-stone-200/50 flex flex-col p-4 gap-2 z-40 hidden md:flex">
<div className="mb-8 px-4 py-6 flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">content_cut</span>
</div>
<div className="text-center">
<h2 className="text-lg font-black text-[#4a7c59]">إدارة تيرا</h2>
<p className="text-xs text-stone-600 font-medium">لوحة التحكم الرئيسية</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-2">

<a className="flex flex-row-reverse items-center gap-3 text-stone-600 px-4 py-3 hover:bg-stone-200/50 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium">لوحة القيادة</span>
</a>

<a className="flex flex-row-reverse items-center gap-3 text-stone-600 px-4 py-3 hover:bg-stone-200/50 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-medium">المستخدمين</span>
</a>

<a className="flex flex-row-reverse items-center gap-3 text-stone-600 px-4 py-3 hover:bg-stone-200/50 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium">الخياطين</span>
</a>

<a className="flex flex-row-reverse items-center gap-3 bg-[#4a7c59]/10 text-[#4a7c59] rounded-xl px-4 py-3 font-bold" href="#">
<span className="material-symbols-outlined" >shopping_cart</span>
<span className="font-medium">الطلبات</span>
</a>

<a className="flex flex-row-reverse items-center gap-3 text-stone-600 px-4 py-3 hover:bg-stone-200/50 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-medium">التحليلات</span>
</a>
</nav>
<div className="mt-auto border-t border-stone-200/50 pt-4">
<button className="w-full flex flex-row-reverse items-center gap-3 text-stone-600 px-4 py-3 hover:bg-stone-200/50 transition-all rounded-xl">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium">تسجيل الخروج</span>
</button>
</div>
</aside>

<main className="md:mr-64 min-h-screen flex flex-col">

<header className="bg-[#faf6f0] docked full-width top-0 z-50 border-b border-stone-200/50 shadow-[0_4px_20px_rgba(46,50,48,0.06)] flex flex-row-reverse justify-between items-center w-full px-6 h-16">
<div className="flex items-center gap-4 flex-row-reverse">
<span className="text-xl font-bold text-[#4a7c59] font-headline">تيرا للملابس</span>
</div>
<div className="flex-1 max-w-md mx-8">
<div className="relative group">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
<input className="w-full bg-[#FAFAF8]-container-low border-none rounded-full py-2 pr-10 pl-4 focus:ring-2 focus:ring-primary/20 text-sm font-body" placeholder="البحث عن رقم الطلب أو اسم العميل..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3 flex-row-reverse">
<button className="p-2 rounded-full hover:bg-stone-100 transition-colors active:scale-95 duration-200 relative">
<span className="material-symbols-outlined text-stone-600">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
</button>
<button className="p-2 rounded-full hover:bg-stone-100 transition-colors active:scale-95 duration-200">
<span className="material-symbols-outlined text-stone-600">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-stone-200 overflow-hidden ml-2">
<img className="h-full w-full object-cover" data-alt="close-up portrait of professional male administrator in light studio setting with warm directional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXa0ZT2TKwBmbCELUOJhVgcXSDfWgVHBuLUD_FCHQiUrNm9vBV6l1__YrnNC44Qn09QJumAcXAAkI4jvNGLW0pbOupOt5w9EXT7GmojblaBrGBoBCyc5aVaLTjG6njoi38uPBHYNTMWGSr6q-S_aLVq7s1k8rCuFl6rZq3fOthuzu-SkWOoymtSlgsVeg8He7SJKvmT7dS2Yr0PnxzqtSfiwKqhonsvGEP_Qg_Uo4GVBCJhd1xyHELFqvCNXVXi9YKKRTvrqnB2ve6"/>
</div>
</div>
</header>

<div className="p-6 md:p-10 space-y-8">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 className="text-3xl font-bold text-on-surface mb-1">إدارة الطلبات</h1>
<p className="text-stone-500 font-body">تتبع وتنظيم جميع طلبات الجلابية والدشداشة عبر المنصة.</p>
</div>
<button className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95">
<span className="material-symbols-outlined">add</span>
                    إضافة طلب جديد
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] border-0 bg-white shadow-sm flex items-center justify-between overflow-hidden relative group">
<div className="z-10">
<p className="text-stone-500 text-sm font-medium mb-1">إجمالي الطلبات</p>
<h3 className="text-3xl font-bold text-on-surface">1,284</h3>
<span className="text-xs text-primary font-bold flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-sm">trending_up</span>
                            +12% هذا الشهر
                        </span>
</div>
<div className="bg-primary/5 p-4 rounded-full z-10">
<span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
</div>
<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>
<div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] border-0 bg-white shadow-sm flex items-center justify-between overflow-hidden relative group">
<div className="z-10">
<p className="text-stone-500 text-sm font-medium mb-1">قيد التنفيذ</p>
<h3 className="text-3xl font-bold text-on-surface">85</h3>
<span className="text-xs text-tertiary font-bold flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-sm">schedule</span>
                            بانتظار اللمسات النهائية
                        </span>
</div>
<div className="bg-tertiary/5 p-4 rounded-full z-10">
<span className="material-symbols-outlined text-tertiary text-4xl">draw</span>
</div>
<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>
<div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] border-0 bg-white shadow-sm flex items-center justify-between overflow-hidden relative group">
<div className="z-10">
<p className="text-stone-500 text-sm font-medium mb-1">تم التوصيل</p>
<h3 className="text-3xl font-bold text-on-surface">1.1k</h3>
<span className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-sm">check_circle</span>
                            مكتمل بنجاح
                        </span>
</div>
<div className="bg-emerald-50 p-4 rounded-full z-10">
<span className="material-symbols-outlined text-emerald-600 text-4xl">local_shipping</span>
</div>
<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>
</div>

<div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] border-0 bg-white shadow-sm overflow-hidden">

<div className="p-4 border-b border-stone-100 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white text-sm font-bold whitespace-nowrap transition-colors">الكل</button>
<button className="px-4 py-2 rounded-full bg-[#FAFAF8]-container-low text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-200 transition-colors">جديد</button>
<button className="px-4 py-2 rounded-full bg-[#FAFAF8]-container-low text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-200 transition-colors">قيد التنفيذ</button>
<button className="px-4 py-2 rounded-full bg-[#FAFAF8]-container-low text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-200 transition-colors">جاهز</button>
<button className="px-4 py-2 rounded-full bg-[#FAFAF8]-container-low text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-200 transition-colors">تم التوصيل</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border-0 bg-white shadow-sm text-stone-600 text-sm font-medium hover:bg-stone-50">
<span className="material-symbols-outlined text-lg">filter_list</span>
                            تصفية متقدمة
                        </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border-0 bg-white shadow-sm text-stone-600 text-sm font-medium hover:bg-stone-50">
<span className="material-symbols-outlined text-lg">download</span>
                            تصدير البيانات
                        </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead className="bg-[#FAFAF8]-container-low text-stone-500 text-xs font-bold uppercase tracking-wider">
<tr>
<th className="px-6 py-4">رقم الطلب</th>
<th className="px-6 py-4">العميل</th>
<th className="px-6 py-4">الخياط</th>
<th className="px-6 py-4">نوع القطعة</th>
<th className="px-6 py-4">المبلغ (SDG)</th>
<th className="px-6 py-4">الحالة</th>
<th className="px-6 py-4 text-left">إجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100 font-body">

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<span className="font-bold text-on-surface">#TR-9281</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-stone-100 overflow-hidden shrink-0">
<img className="h-full w-full object-cover" data-alt="close-up portrait of handsome middle-aged man with short beard and friendly expression against warm neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAejpyzkawkHkMG3f_mFgKe9Ztt1hDakIwWuTe4k64nuh1obpzO6pxwen7ZC97VM3IHr7Q1UuGfQuG1S1_P6EipexjEqWbNTcco_31M6Q_WtFlr_2qKzPGRXUpILQ418m8dlUcaOFdVVD5T6qWAAesbeHevma2ODCQthbYOBVlaeweNEP4fm4h3-NFAKomrL0RDDD80q4Dm3UBEtT7YPPrxqf1fUuvlXqtgyBkkYTiAB5woAAC6afq26wOUus807t0A_CTbx-t9xvGW"/>
</div>
<div>
<p className="font-bold text-on-surface">أحمد منصور</p>
<p className="text-xs text-stone-500">الخرطوم، السودان</p>
</div>
</div>
</td>
<td className="px-6 py-4">عثمان الطيب</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg overflow-hidden border-0 bg-white shadow-sm">
<img className="h-full w-full object-cover" data-alt="close-up of high-quality white cotton fabric texture with intricate subtle woven pattern in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6BclFigHbTi1KqSL_c2hMA3sPJXtbUfXa4YhIBXFdcVbVdshkv1RUEs2JxrtUedX-yhcSdT0Wmg6mexsPVMharyaODvLvOyujH9VugnQ5R1lbjVygqqZiluoMM8ApV0KKuE6HNbOwvIDkz_-HyOTzMg69IWoHyolejs2ReDHv5STz301V2gPbLP_ttSlijX62oHmDmpewWZjaGaFYih_qv52F9O8g5z_oPgdK25l_CuDKuVs90UKPWSNq__xBSaaoyADhqwqkkEV"/>
</div>
<span>جلابية كلاسيك</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">45,000</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border-0 bg-white shadow-sm">تم التوصيل</span>
</td>
<td className="px-6 py-4 text-left">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<span className="font-bold text-on-surface">#TR-9285</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-stone-100 overflow-hidden shrink-0">
<img className="h-full w-full object-cover" data-alt="portrait of smiling middle-eastern man in professional attire with soft bokeh background and warm sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbRlzoKc4FZ13t9LtD1jzMXTQ37JKZQqj7ySmJ1YUUFSRQZVgl3-RX1lLaUFJvz1lGhW_ZiUKUjD39_3EL0NF_yaoQoKifjzra_LG0-tz89gI7NxP7ZrdBYAvl0r33QDRRtMklQV1PQ96rtFYFxC8bBzn0GXD0loCiZJyWnw2d-dz1leDkRmt-ve-UMcK6HImaCTG-kR-cTmxdNXym8OD7GK05f0qpjRFsd0Wu-SSG0cBY6UXOC20I3A7Sav4b96azaX7PfIli0LX"/>
</div>
<div>
<p className="font-bold text-on-surface">محمد إدريس</p>
<p className="text-xs text-stone-500">أم درمان</p>
</div>
</div>
</td>
<td className="px-6 py-4">بكري الخياط</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg overflow-hidden border-0 bg-white shadow-sm">
<img className="h-full w-full object-cover" data-alt="extreme close-up of dark charcoal linen fabric with visible weave and organic texture in soft studio light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLEtCpEvlG0mTsySxEubJhulMMtiItd7LTWTmLrkTu63uKIp1Omj-1VCVBZyFqXeC5eDyQxaVjMRiRHuWyX5zRKLNYh0WbQMXP1tRD5bpKZIDzalAuGo3nLUEwRu9Ymb1l4C9hTtNcRjzpLblpT90lNrU_DXINWMeJaloXScEDbKhPlbKH8qyqd3XE6prvKj-rx3iBfNwT3YqPTgl6Cep6Unwrs4Xj-T7tc_Kuc1hGhDGOG3kw3_bT0DTtzHobjw3eNX4qfsRQHrmj"/>
</div>
<span>دشداشة شتوية</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">52,500</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-tertiary-fixed text-on-tertiary-fixed border-0 bg-white shadow-sm">قيد التنفيذ</span>
</td>
<td className="px-6 py-4 text-left">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<span className="font-bold text-on-surface">#TR-9290</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-stone-100 overflow-hidden shrink-0">
<img className="h-full w-full object-cover" data-alt="professional portrait of young man with thoughtful expression in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENXhYMeVcdRdu5epy-DzvgAmYj2mQq8OvCqMlcbaSLhI58M3Df4TI0GMaasOY4stIvsXERWyKAk_1Hoz2uSFSWgMdOkmn9jjr4b8V5CtdU0QpT6aHdOIbYMyz8YALQO8_e96cToPfgw4q9SHkPQOtr1r33AG1W-XELP6yXQ2qD09vOsPTay5crFD6VXaj2XJ_wW_nObcpepi_G0HNz4CmoDSvmEAPOPuKq7DaLTk8xlHm6wyexN_pf0JcUQ6c9_oKUuvSjZ_jIgtW"/>
</div>
<div>
<p className="font-bold text-on-surface">خالد حسن</p>
<p className="text-xs text-stone-500">بحري</p>
</div>
</div>
</td>
<td className="px-6 py-4">التاج للحلول</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg overflow-hidden border-0 bg-white shadow-sm">
<img className="h-full w-full object-cover" data-alt="close-up of premium silk fabric with elegant draping and soft metallic sheen in warm ambient light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT19QjjZhuE9p7RIXM8pjDSCh5gIaXfmBWd1ZJmbcjJ62-vh13l_6S9xMEDVL3fSSgVHMRJDDbIjHHJmrdkMLvY175wMJQJ6gsaDRnKgm2Sc3rSd-lZMqTNbWHm4oAJ_OUfDPd3P22VppQ7N_J4W4syS85g-ySWM-TU8cHStjO-fBI0sFbvffRXuxyqplr27zJCEe1ThyzCnCAHV3SlX_9D8vGjPtQDTJISRKjMyUEfXlDHwlwnGmy8tvjZ5Ha28DbULBvvY-MfJiz"/>
</div>
<span>جلابية زفاف</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">88,000</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-error-container text-on-error-container border-0 bg-white shadow-sm flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span>
                                        عاجل
                                    </span>
</td>
<td className="px-6 py-4 text-left">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 bg-[#FAFAF8]-container-low flex items-center justify-between">
<p className="text-sm text-stone-500 font-body">عرض 1-10 من أصل 1,284 طلب</p>
<div className="flex items-center gap-1">
<button className="h-8 w-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm hover:bg-white text-stone-600 transition-colors">
<span className="material-symbols-outlined text-lg">chevron_right</span>
</button>
<button className="h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white font-bold text-sm">1</button>
<button className="h-8 w-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm hover:bg-white text-stone-600 text-sm">2</button>
<button className="h-8 w-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm hover:bg-white text-stone-600 text-sm">3</button>
<button className="h-8 w-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm hover:bg-white text-stone-600 transition-colors">
<span className="material-symbols-outlined text-lg">chevron_left</span>
</button>
</div>
</div>
</div>
</div>

<footer className="mt-auto py-8 text-center text-stone-400 text-xs font-body">
            © 2024 تيرا للملابس - لوحة الإدارة الذكية
        </footer>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#faf6f0] border-t border-stone-200/50 px-6 h-16 flex items-center justify-between z-50">
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">الرئيسية</span>
</a>
<a className="flex flex-col items-center gap-1 text-[#4a7c59]" href="#">
<span className="material-symbols-outlined" >shopping_cart</span>
<span className="text-[10px] font-bold">الطلبات</span>
</a>
<div className="relative -top-6">
<button className="h-14 w-14 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white rounded-full shadow-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">add</span>
</button>
</div>
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">group</span>
<span className="text-[10px] font-bold">العملاء</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] font-bold">الإعدادات</span>
</a>
</nav>
    </>
  );
}