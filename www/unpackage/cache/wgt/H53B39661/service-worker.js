const CACHE_NAME = 'prayer-v1';
const urlsToCache = [
  'index.html',
  '接待的心玫瑰经\周一欢喜奥迹玫瑰经祈祷.html',
  '接待的心玫瑰经\周二成长奥迹玫瑰经祈祷.html',
  '接待的心玫瑰经\周三光明奥迹玫瑰经祈祷.html',
  '接待的心玫瑰经\周四刑前奥迹玫瑰经祈祷.html',
  '接待的心玫瑰经\周五痛苦奥迹玫瑰经祈祷.html',
  '接待的心玫瑰经\周六安息奥迹玫瑰经祈祷.html',
  '接待的心玫瑰经\周日荣福奥迹玫瑰经祈祷.html',
  '晚餐厅集祷争战玫瑰经\欢喜奥迹玫瑰经.html',
  '晚餐厅集祷争战玫瑰经\光明奥迹玫瑰经.html',
  '晚餐厅集祷争战玫瑰经\痛苦奥迹玫瑰经.html',
  '晚餐厅集祷争战玫瑰经\荣福奥迹玫瑰经.html',
  '耶稣至圣宝血经文\第一部分.html',
  '耶稣至圣宝血经文\第二部分.html',
  '耶稣至圣宝血经文\第三部分.html',
  '耶稣至圣宝血经文\第四部分.html',
  '第五部分.html',
  '七苦玫瑰经1.html',
  '苦路玫瑰经1.html',
  '血泪玫瑰经1.html',
  '五大洲玫瑰经1.html',
  '十五首1.html',
  '圣若瑟玫瑰经1.html',
  '耶稣圣心圣母圣心经文1.html',
  '24小时昼夜祈祷流程.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});