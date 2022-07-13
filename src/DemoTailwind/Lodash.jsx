import React from "react";
import _ from "lodash";

export default function Lodash() {
  // _.join(array, '-')
  const arr = ["A", "B", "C", "D", "E", "F"];
  const newArr = _.join(arr, "*");
  //es6:
  const newArr1 = arr.join("-");
  //console.log(newArr1)
  // console.log(newArr)

  // _.find(arr, item => condition)
  const findItem = _.find(arr, (item) => item === "A");
  const studentArr = [
    { id: 1, name: "Anna", age: 31 },
    { id: 2, name: "Henry", age: 30},
    { id: 3, name: "Mari" , age: 24},
  ];
  const findStd = _.find(studentArr, item=> item.name=== 'Anna')
  const findStd1 = _.find(studentArr, item=> item.age=== 30)

  // _.first(arr)      find the first element in the array
  // _.last(arr)       find the last element in the array

  let firstSt = _.first(studentArr)
  console.log('first student', firstSt)
  let lastSt = _.last(studentArr)
  console.log('last student', lastSt)

  // _.chunk(array, size=option): create a new array including small array with the length of passing paramater (size=option)
  const arrNumber = [1,2,3,4,5,6,7,8,9]
  const newArrNumb= _.chunk(arrNumber, 2)
  console.log('newArrNumb', newArrNumb)
  const randomArr = ['id', 1, 'name', 'An', 'info', 'cyberlearn', 'age', 31]
  const newRandomArr = _.chunk(randomArr,3)
  console.log('newRandomArr', newRandomArr)

  // _.fill(array, param) : replace all elements in the array by the new param
  //_.fill(array, param, start, end-1) : replace all elements from position START to position END-1

  const arrFill = [1,2,3,4,5,6]
  //const newArrFill = _.fill(arrFill, 'hihi')
  //console.log('fill',newArrFill)
  const arrFillSE = _.fill(arrFill, 'haha', 2, 4)
  console.log('fillSE',arrFillSE)

  //_.sortBy(collection, [iteratees = [_.identity]]) : arrange collection according to the condition
  const peopleList = [
    {name: 'John', age: 21},
    {name: 'Anna', age: 31},
    {name: 'Bob', age: 26},
    {name: 'Jon',age : 27},
    {Mari: 'Henry', age: 18}
  ]
  const resultSortByAge = _.sortBy(peopleList, [item=> item.age] )
  console.log('resultSortByAge',resultSortByAge)
  const resultSortByName = _.sortBy(peopleList, [item => item.name])
  console.log('resultSortByName',resultSortByName)

  //_.size(array)
  //_.size(object)
  // return the number amount of total elements in the array or properties in an object

  const arr2= [
    {id: 1, name: 'iphone', price: 1000},
    {id: 2, name: 'samsung', price: 1500},
    {id: 3, name: 'xiaomi', price: 2000},
]
const size= _.size(arr2)
console.log(size)
    const obj = {id: 1, name: 'iphone', price: 1000, age: 5}
    console.log('size', _.size(obj))

    //_.includes(arr, param) : check if param is included in the array
    const arr3 = [1,2,3,4,5,6]
    console.log(_.includes(arr3, 1))
    console.log(_.includes(arr3, '3'))
    const obj1 =  {id: 3, name: 'xiaomi', price: 2000}
    console.log(_.includes(obj1,'xiaomi'))
    console.log(_.includes(obj1,2000))
    console.log(_.includes(obj1,'id'))

    //_.uniq(arr): remove the same element in an array
    //_.uniqBy(arr, param): remove elements having smt in common in an array
    const arr4= [1,2,3,4,5,6, 2,2,3,3,8,9]
    console.log(_.uniq(arr4,))
    const arr5= [
      {id: 1, name: 'iphone', price: 1000},
      {id: 2, name: 'samsung', price: 1500},
      {id: 3, name: 'xiaomi', price: 2000},
      {id: 3, name: 'xiaomi', price: 7000},
      {id: 3, name: 'xiaomi', price: 2000},
      {id: 4, name: 'ipad', price: 4000}
    ]
    console.log(_.uniqBy(arr5, 'id'))
    console.log(_.uniqBy(arr5, 'price'))

    //_.flatten(arr): dung de phan tach cac mang trong mang 1 cap
    //_-flattenDeep(array): la ham dung de phan tach tat ca cac mang trong mang NHIEU cap
    const arr6= [1,2,[3,[4,[5]]]]
    const arr7= [1, [2,[3,[4]],5]]
    console.log(_.flatten(arr6))
    console.log(_.flatten(arr7))
    console.log(_.flattenDeep(arr7))

    //Lodash compare array object
    //_.isEqual(objectA, objectB): tra ve true/false
    const arr10= [1,2]
    const arr11= [2,1]
    const r= _.isEqual(arr10.sort(), arr11.sort())
    console.log('isEqual',r)

    const arr8= [['a','b'], ['c', 'b']]
    const arr9= [['b','c'],['b', 'a']]
    const result= _.isEqual(arr8.sort(), arr9.sort())
    console.log('isEqualLetter',result) //false
    console.log(arr9.sort())

    const arrObj1 = [{id:1, name: 'An'}, {id:2, name: 'My'}]
    const arrObj2 = [{id:1, name: 'An'}, {id:2, name: 'My'}]
    const arrObj3 = [{id:1, name: 'An'}, {id:2, name: 'My'}, {id:3, name:'Hi'}]
    const result2 = _.differenceWith(arrObj1, arrObj2, _.isEqual) ;
    console.log('difference',result2) //[]
    const result3 = _.differenceWith(arrObj3, arrObj1, _.isEqual) ;
    console.log('difference',result3)
    const result4 = _.differenceWith(arrObj1, arrObj3, _.isEqual) ;
    console.log('difference',result4)

    // _.pick(object, [paths]) : tao 1 object tu path( la cac thuoc tinh cua object cu) bot di thuoc tinh --> nguoc lai voi spread operator
    var object = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
    console.log( _.pick(object, ['a','c']) )
    console.log( _.pick(object, ['d','c', 'a']) )

    //_.has(object, path): kiem tra xem path co phai la thuoc tinh truc tiep cua doi tuong hay khong
    var obj3= {'a': {'b': 2}}
    console.log(_.has(obj3, 'a'))
    console.log(_.has(obj3, 'a.b'))
    console.log(_.has(obj3, ['a','b']))

    //_.findKey(object, [predicate = _.identity]): tim va tra ve key cua 1 phan tu trong object, 
    //co the tim bang key name, hoac tim value, va sau do tra ve key

    var userList = {
      'fred':{ age: 25, active: true},
      'anna': { age: 25, active: true},
      'jon': { age: 25, active: false}
    }
    console.log(_.findKey(userList,'active' ))
    console.log(_.findKey(userList,['active', false ]))
    console.log(_.findKey(userList,['age', 25 ]))
  return (
    <div>
      {/* <p> _.join(arr,'*') </p> */}
      <p>{newArr} </p>
      <p>{findItem}</p>
      <p> {findStd1.name} - {findStd1.age}</p>
    </div>
  );
}
