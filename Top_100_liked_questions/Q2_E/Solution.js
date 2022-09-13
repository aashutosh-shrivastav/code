function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {
    if(list1.next === undefined ) return list2;
    if(list2.next === undefined) return list1;
    let start =  list1;
    if(list1.val < list2.val)
    {
        list1 = list.next;
    }
    else
    {
        start = list2;
        list2=list2.next;
    }
    let temp = start;
    while(list1 && list2)
    {
        if(list1.val<list2.val){
            temp.next = list1;
            list1=list1.next;
        }
        else{
            temp.next = list2;
            list2=list2.next;
        }
        temp = temp.next;
    }
    if(list1) temp.next = list1;
    else if(list2) temp.next = list2;
    return start;
};

var mergerTwoList = function(list1,list2)
{
    if (!list1 || !list2) return list1 ? list1 : list2;
    
    let mergedList = new ListNode();
    let current = mergedList;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    current.next = list1 || list2;
    return mergedList.next;
}
var traverse = function(x)
{
    while(x)
    {
       console.log(x.val);
       x=x.next;
    }
}


l1 = {val:4,next:null}
l2 ={val:2,next:l1}
l3 ={val:1,next:l2}
traverse(l3)

console.log("--------------------------")
l1 = {val:4,next:null}
l2 ={val:3,next:l1}
l4  ={val:1,next:l2}
traverse(l4)

console.log("--------------------------")

 x = mergerTwoList(l3,l4);
 traverse(x)





