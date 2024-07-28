
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

    private static class Node {
        protected String value;
        protected Node next;

        Node() {
        }

        Node(String value) {
            this.value = value;
            next = new Node();
        }
    }

    private Node head;
    private Node tail;
    private Node placeholder;
    private int length;

    SinglyLinkedList(String head) {
        // start of list
        this.head = new Node(head);
        // next node and is inside head object. Is null
        tail = this.head.next;
        // tail and place holder start out on the same object
        placeholder = tail;
        length++;
    }

    void push(String value) {
        placeholder.value = value;
        // tail is one up in the chain from placeholder.
        // now that placeholder is not null we make tail the address of what placeholder
        // was
        tail = placeholder;
        // new node in the chain
        tail.next = new Node();
        // set place holder to the new node making it null.
        placeholder = tail.next;
        length++;
    }

    public int getLength() {
        return length;
    }

    @Override
    public String toString() {
        Node currentNode = head;
        String linkedList = "";

        for (int i = 0; i < length; i++) {
            linkedList += currentNode.value;
            currentNode = currentNode.next;
        }
        return linkedList;
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