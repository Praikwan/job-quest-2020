function fibonacci(num) 
	{ 
		if(num==1) 
			return 1; 
		if (num == 2) 
			return 1; 
		return fibonacci(num - 1) + fibonacci(num - 2); 
	} 
document.write("Fibonacci(1): "+fibonacci(1)+"<br>"); 
document.write("Fibonacci(2): "+fibonacci(2)+"<br>"); 
document.write("Fibonacci(3): "+fibonacci(3)+"<br>"); 
document.write("Fibonacci(4): "+fibonacci(4)+"<br>"); 
document.write("Fibonacci(5): "+fibonacci(5)+"<br>"); 
document.write("Fibonacci(6): "+fibonacci(6)+"<br>"); 
document.write("Fibonacci(7): "+fibonacci(7)+"<br>"); 
document.write("Fibonacci(8): "+fibonacci(8)+"<br>"); 
document.write("Fibonacci(9): "+fibonacci(9)+"<br>"); 
document.write("Fibonacci(10): "+fibonacci(10)+"<br>"); 
document.write("Fibonacci(11): "+fibonacci(11)+"<br>"); 
document.write("Fibonacci(12): "+fibonacci(12)+"<br>"); 
document.write("Fibonacci(13): "+fibonacci(13)+"<br>"); 

