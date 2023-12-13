'use strict';

const removeADS = document.querySelector('.ads');
removeADS.remove();

const itemsListAll = document.getElementsByClassName('item');
const itemsTitleList = document.getElementsByClassName('item__title');
const propsListAll = document.getElementsByClassName('props__list');
const propsItemsAll = document.getElementsByClassName('props__item');

itemsListAll[3].after(itemsListAll[0]);

itemsTitleList[3].after(propsListAll[2]);
itemsTitleList[1].after(propsListAll[4]);

propsItemsAll[24].after(propsItemsAll[9]);
propsItemsAll[13].after(propsItemsAll[43]);
propsItemsAll[14].after(propsItemsAll[44]);
