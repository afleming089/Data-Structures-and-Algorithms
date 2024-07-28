
/**
 * SinglyLinkedList
 * Example and notes
 */

public class SinglyLinkedList {
    // stores strings numbers and is a list of data.
    // Arrays are mapped with index`s. Linked list are just a bunch
    // of elements that point to the next thing.

    // consist of nodes. Each node has a value and a pointer to another node or
    // null.
    // Null is node
    // keeps track of head, tail, and length.

    public static class Node {
        String value;
        Node next;

        Node() {
        }

        Node(String value) {
            this.value = value;
            next = new Node();
        }

        @Override
        public String toString() {
            // TODO Auto-generated method stub
            return value;
        }
    }

    private Node head;
    private Node tail;
    private int length;

    SinglyLinkedList(String head) {
        this.head = new Node(head);
        tail = this.head.next;
    }

    void push(String value) {
        tail.value = value;
        tail.next = new Node("");
        tail = tail.next;
        length++;
    }

    public String toString() {
        // TODO Auto-generated method stub
        return head.value + head.next.value + tail.value;
    }

    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList("hi ");
        list.push(" how");
        list.push(" are you doing.");
        list.push(" s.");
        list.push(" dasd doing.");
        list.push(" dar.");

        System.out.println(list.length + " " + list.toString());
    }
}