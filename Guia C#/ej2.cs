using System;
using System.Collections.Generic;

public class Program
{
    public static void LlenarPila(Stack<int> myPila)
    {
        myPila.Push(1);
        myPila.Push(2);
        myPila.Push(3);
        myPila.Push(4);
    }

    public static int EvaluateRPN(string[] tokens)
    {
        Stack<int> stack = new Stack<int>();

        foreach (string token in tokens)
        {
            if (int.TryParse(token, out int value))
            {
                stack.Push(value);
            }
            else
            {
                int operand2 = stack.Pop();
                int operand1 = stack.Pop();

                switch (token)
                {
                    case "+":
                        stack.Push(operand1 + operand2);
                        break;
                    case "-":
                        stack.Push(operand1 - operand2);
                        break;
                    case "*":
                        stack.Push(operand1 * operand2);
                        break;
                    case "/":
                        stack.Push(operand1 / operand2);
                        break;
                }
            }
        }

        return stack.Pop();
    }

    public static void Main()
    {
        Stack<int> myPila = new Stack<int>();

        LlenarPila(myPila);
      

        Console.WriteLine();

        string[] tokens = { "6", "10", "5", "/", "*", "10", "+" };
        Console.WriteLine(EvaluateRPN(tokens));
    }
}
