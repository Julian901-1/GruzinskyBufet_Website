// Функционал кнопки "Построить маршрут"
document.addEventListener('DOMContentLoaded', function() {
    const routeBtn = document.getElementById('routeBtn');

    routeBtn.addEventListener('click', function() {
        // Меняем текст кнопки
        routeBtn.textContent = 'Ждём вас';

        // Редирект на Яндекс.Карты с маршрутом
        window.location.href = 'https://yandex.ru/maps/213/moscow/?ll=37.808590%2C55.756040&mode=routes&rtext=~55.755981%2C37.806256&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D194939850677&z=16.4';
    });
});
