###
# exercises.py
# Ejercicios para practicar los conceptos aprendidos en las lecciones.
###

print("\nEjercicio 1: Imprimir mensajes")
print("Escribe un programa que imprima tu nombre y tu ciudad en líneas separadas.")

print("Jeremy")
print("Guatemala")

print("--------------")

print("\nEjercicio 2: Muestra los tipos de datos de las siguientes variables:")
print("Usa el comando 'type()' para determinar el tipo de datos de cada variable.")
a = 15
b = 3.14159
c = "Hola mundo"
d = True
e = None

print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))

print("--------------")

print("\nEjercicio 3: Casting de tipos")
print("Convierte la cadena \"12345\" a un entero y luego a un float.")
print("Convierte el float 3.99 a un entero. ¿Qué ocurre?")

cadena_original = "12345"
cadena_entero = int(cadena_original)
cadena_float = float(cadena_entero)
decimal_original = 3.99
decimal_convertido = int(decimal_original)

print(cadena_original, "cadena original")
print(cadena_entero, "cadena entero")
print(cadena_float, "cadena float")
print(decimal_original, "decimal original")
print(decimal_convertido, "decimal convertido")

print("--------------")

print("\nEjercicio 4: Variables")
print("Crea variables para tu nombre, edad y altura.")
print("Usa f-strings para imprimir una presentación.")

nombre = "Jeremy"
edad = 24
altura = 169
print(f"Hola mi nombre es {nombre}, tengo {edad} años y mido {altura} cm")

print("--------------")

print("\nEjercicio 5: Números")
print("1. Crea una variable con el número PI (sin asignar una variable)")
print("2. Redondea el número con round()")
print("3. Haz la división entera entre el número que te salió y el número 2")
print("4. El resultado debería ser 1")

redondeo = round(3.1416) # 3
resultado = int(redondeo / 2) # 3 / 2 = 1.5
print(resultado)