const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]


// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
// Для предприятия посчитать сумму всех сотрудников во всех отделах.

for (let i = 0; i < enterprises.length; i++){
    let summ = 0;
    for (let j =0; j < enterprises[i].departments.length; j++){
        summ = summ + enterprises[i].departments[j].employees_count;
    }
console.log(enterprises[i].name , summ , 'сотруднииков');
    for (let j =0; j < enterprises[i].departments.length; j++){
        console.log('-' , enterprises[i].departments[j].name , enterprises[i].departments[j].employees_count)
    }
}




//2
// Написать функцию, которая будет принимать 1 аргумент 
// (id отдела или название отдела и возвращать название предприятия, к которому относится)
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName (departmentId) {
    enterprises.filter(function (item) {
        item.departments.filter(dept => dept.id == departmentId || dept.name == departmentId)
    .filter(dept => console.log(item.name))
    })
}

getEnterpriseName(2)
getEnterpriseName(7)
getEnterpriseName('Отдел аналитики')

//var_2

function getEnterpriseName (departmentId) {
    enterprises.filter((item) => item.departments.filter(dept => dept.id == departmentId || dept.name == departmentId)
    .filter(dept => console.log(item.name))
    )}


getEnterpriseName(2)
getEnterpriseName(7)
getEnterpriseName('Отдел аналитики')




// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")

function addEnterprise (newEntrp) {
    enterprises.push ({id : 11 , name : newEntrp})
    console.log(enterprises)
}
addEnterprise ("Новое предприятие!")




//   4. Написать функцию, которая будет добавлять отдел в предприятие. 
// В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment (idAdd , depAdd) {
    let t = (enterprises[enterprises.length - 1].departments.find(itm => itm.id)).id
    enterprises.map(function (newItem) {
        if (newItem.id == idAdd) {
        newItem.departments.push ({id : t+1 , name : depAdd , employees_count : 5}) 
        }
    })
}
addDepartment (9 , 'Новый отдел')

for (let i = 0; i < enterprises.length; i++){
    console.log(enterprises[i])
}




// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise (entId , newName) {
    enterprises.filter((itm => itm.id == entId)).map((itm => itm.name = newName))
}
editEnterprise(1, 'Новое название предприятия')

// console.log(enterprises)
for (let i = 0; i < enterprises.length; i++){
    console.log(enterprises[i])
}




// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment (depId , newName) {
    enterprises.filter(function (item) {
        item.departments.filter((itm => itm.id == depId))
    .map((itm => itm.name = newName))
    })
}
editDepartment(7, 'Новое название отдела')



for (let i = 0; i < enterprises.length; i++){
    console.log(enterprises[i])
}




// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

function deleteEnterprise (entId) {
    enterprises.splice((enterprises.findIndex(itm => itm.id == entId)), 1 , '--deleted--')
};
deleteEnterprise(5)


console.log(enterprises)




// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

function deleteDepartment (entId) {
    let i = enterprises.findIndex((dept) => dept.departments.find(element =>  element.id === entId));
    let j = enterprises[i].departments.findIndex(hh => hh.id == entId)
    if (enterprises[i].departments[j].employees_count == 0) {
    enterprises[i].departments.splice(j, 1 , '--deleted--')
        }    else console.log('Там есть работники, низя удалять')
}
deleteDepartment(4)


for (let i = 0; i < enterprises.length; i++){
console.log(enterprises[i])
}




// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, 
// в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)