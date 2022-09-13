package Top_100_liked_questions.Q2_E;

public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    public static void traverse(ListNode start)
    {
        if(null == start)
        {
            return ;
        }
        else
        {
            System.out.println("-->("+start.val+")");
        }
        traverse(start.next);
    }
}
