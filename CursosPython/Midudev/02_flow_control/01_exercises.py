###
# EJERCICIOS
###

# Ejercicio 1: Determinar el mayor de dos números
# Pide al usuario que introduzca dos números y muestra un mensaje
# indicando cuál es mayor o si son iguales
print("Ejercicio 1")
num1 = int(input("Ingresa el primer numero: "))
num2 = int(input("Ingresa el segundo numero: "))

if num1 == num2:
    print("Los numeros son iguales")
elif num1 > num2:
    print(f"${num1} es mayor")
else:
    print(f"{num2} es mayor")

# Ejercicio 2: Calculadora simple
# Pide al usuario dos números y una operación (+, -, *, /)
# Realiza la operación y muestra el resultado (maneja la división entre zero)
print("\nEjercicio 2")
num1 = int(input("Ingresa el primer numero: "))
num2 = int(input("Ingresa el segundo numero: "))
operacion = input("Que operacion deseas realizar? + - * /: ")

if operacion == "+":
    print(f"El resultado de la suma es: {num1 + num2}")
elif operacion == "-":
    print(f"El resultado de la resta es: {num1 - num2}")
elif operacion == "*":
    print(f"El resultado de la multiplicacion es: {num1 * num2}")
elif operacion == "/":
    print(f"El resultado de la division es: {num1 / num2}")
else:
    print("Ingresa un caracter valido")

# Ejercicio 3: Año bisiesto
# Pide al usuario que introduzca un año y determina si es bisiesto.
# Un año es bisiesto si es divisible por 4, excepto si es divisible por 100 pero no por 400.
print("\nEjercicio 3")
anio = int(input("Ingresa el año para evaluar si es bisiesto o no: "))

if anio % 4 == 0:
    print("Es un año bisiesto")
else:
    print("No es un año bisiesto")

# Ejercicio 4: Categorizar edades
# Pide al usuario que introduzca una edad y la clasifique en:
# - Bebé (0-2 años)
# - Niño (3-12 años)
# - Adolescente (13-17 años)
# - Adulto (18-64 años)
# - Adulto mayor (65 años o más)
print("\nEjercicio 4")
edad = int(input("Ingresa tu edad: "))

if 0 <= edad <= 2:
    print("Bebé")
elif 3 <= edad <= 12:
    print("Niño")
elif 13 <= edad <= 17:
    print("Adolescente")
elif 18 <= edad <= 64:
    print("Adulto")
elif edad >= 65:
    print("Adulto mayor")
else:
    print("Edad no válida.")