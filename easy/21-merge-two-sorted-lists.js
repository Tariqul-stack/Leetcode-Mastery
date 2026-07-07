// 21.Merge Two Sorted Lists
// Difficulty: Easy
// Topic: Linked List, two-pointer
// Date: 2026-06-27

var mergeTwoLists = function(list1, list2) {
    let dummy = {val:0, next: null};
    let current = dummy;

    while (list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            current = current.next;
            list2 = list2.next;
        }
    }
    if(list1 !== null){
        current.next = list1;
    } 
    else{
        current.next = list2;
    }
    return dummy.next;
}