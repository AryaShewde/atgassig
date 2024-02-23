document.getElementById('toggleButton').addEventListener('click', function () {
    var component1 = document.getElementById('component1');
    var component2 = document.getElementById('component2');
    var component3 = document.getElementById('component3');
    var component4 = document.getElementById('component4');
    var component5 = document.getElementById('component5');
    var component6 = document.getElementById('component6');

    if (component1.classList.contains('visible')) {
        component1.classList.remove('visible');
        component2.classList.add('visible');
        component3.classList.remove('visible');
        component4.classList.add('visible');
        component5.classList.remove('visible');
        component6.classList.add('visible');
    } else {
        component1.classList.add('visible');
        component2.classList.remove('visible');
        component3.classList.add('visible');
        component4.classList.remove('visible');
        component5.classList.add('visible');
        component6.classList.remove('visible');
    }
});
document.getElementById('firstButton').addEventListener('click', function () {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    button1.style.display = 'none';
    button2.style.display = 'block';
});

document.getElementById('secondButton').addEventListener('click', function () {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    button1.style.display = 'block';
    button2.style.display = 'none';
});
document.getElementById('btnn1').addEventListener('click', function () {
    var button1Container = document.getElementById('button1Container');
    var button2Container = document.getElementById('button2Container');

    button1Container.style.display = 'none';
    button2Container.style.display = 'block';
});
document.getElementById('btnnn1').addEventListener('click', function () {
    var button1Container = document.getElementById('button12Container');
    var button2Container = document.getElementById('button22Container');

    button1Container.style.display = 'none';
    button2Container.style.display = 'block';
});
document.getElementById('btnnnn1').addEventListener('click', function () {
    var button1Container = document.getElementById('button13Container');
    var button2Container = document.getElementById('button23Container');

    button1Container.style.display = 'none';
    button2Container.style.display = 'block';
});
document.getElementById('btnnnnn1').addEventListener('click', function () {
    var button1Container = document.getElementById('button14Container');
    var button2Container = document.getElementById('button24Container');

    button1Container.style.display = 'none';
    button2Container.style.display = 'block';
});

document.getElementById('btnn2').addEventListener('click', function () {
    var button1Container = document.getElementById('button1Container');
    var button2Container = document.getElementById('button2Container');

    button1Container.style.display = 'block';
    button2Container.style.display = 'none';
});
document.getElementById('btnnn2').addEventListener('click', function () {
    var button1Container = document.getElementById('button12Container');
    var button2Container = document.getElementById('button22Container');

    button1Container.style.display = 'block';
    button2Container.style.display = 'none';
});
document.getElementById('btnnnn2').addEventListener('click', function () {
    var button1Container = document.getElementById('button13Container');
    var button2Container = document.getElementById('button23Container');

    button1Container.style.display = 'block';
    button2Container.style.display = 'none';
});
document.getElementById('btnnnnn2').addEventListener('click', function () {
    var button1Container = document.getElementById('button14Container');
    var button2Container = document.getElementById('button24Container');

    button1Container.style.display = 'block';
    button2Container.style.display = 'none';
});