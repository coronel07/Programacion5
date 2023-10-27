using System;
using System.Collections;
					
public class Program
{
	public static void Main()
	{
		Stack myStack = new Stack();
		myStack.Push(1);
		myStack.Push(2);
		myStack.Push(3);
		myStack.Push(4);
		
		while (myStack.Count > 0)
			 Console.Write(myStack.Pop());
		
		Console.WriteLine();
	}
}