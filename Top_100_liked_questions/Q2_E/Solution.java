package Top_100_liked_questions.Q2_E;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */


class Solution {

    public static void main(String[] args) {
        ListNode l1 = new ListNode();
        ListNode l2 = new ListNode();
        ListNode s = null;

        l2.val = getRand();
        l1.val = getRand();
        ListNode x = l1;
        for (int i =0;i < 10;i++)
        {
            ListNode temp = new ListNode();
            temp.val = x.val + getRand();
            x.next = temp;
            x =temp;
        }

        ListNode.traverse(l1);

        x = l2;
        for (int i =0;i < 10;i++)
        {
            ListNode temp = new ListNode();
            temp.val =x.val + getRand();
            x.next = temp;
            x =temp;
        }
        ListNode.traverse(l2);


        s = mergeTwoLists(l1, l2);
        ListNode.traverse(s);


    }
    public static int getRand()
    {
        return (int) Math.round(Math.random()*10);
    }

    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        //Since max length of linked list is 50 recursion is a viable solution otherwise itrative method
        ListNode s = null;
        if(null == list1)
        {
            s = list2;
        }
        else if(null == list2)
        {
            s = list1;
        }
        else if(list1.val <= list2.val)
        {
            s = list1;
            list1.next = mergeTwoLists(list1.next,list2);
        }
        else if(list1.val > list2.val)
        {
            s = list2;
            list2.next =  mergeTwoLists(list1,list2.next);
        }
        return s;
    }
}