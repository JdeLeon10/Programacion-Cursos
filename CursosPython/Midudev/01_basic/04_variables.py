# Python es un lenguaje de tipado dinamico y de tipado fuerte

my_name = "Jeremy"
my_age = 24
proffesion = "Developer"

print("Mi nombre es " + my_name + " y tengo " + str(my_age) + " años")

# Evaluar tipos y "corregir" automaticamente
# f-string (literal de cadena de formato)
print(f"Hola mi nombre es {my_name} y tengo {my_age} años")

pi = 3.14
MI_CONSTANTE = 3.1416 # convension -> Uppercase

print(pi)
print(MI_CONSTANTE)

# Las constantes en python no existen
pi = 16
MI_CONSTANTE = 16

print(pi)
print(MI_CONSTANTE)

# Palabras reservadas en Python (no se pueden usar como nombres de variables)

# ['False', 'None', 'True', 'and', 'as', 'assert',
# 'async', 'await', 'break', 'class', 'continue',
# 'def', 'del', 'elif', 'else', 'except', 'finally',
# 'for', 'from', 'global', 'if', 'import', 'in', 'is',
# 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
# 'return', 'try', 'while', 'with', 'yield']

# Type anotation = comentario de variable, aun se puede cambiar
# Puede cambiarse en settings -> typecheck -> strict
name : str = "Alejandro"
age : int = 24
isDeveloper : bool = True;