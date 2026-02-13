print("Hola, como te llamas?")
nombre = input()
print(f"Hola {nombre}")

age = input("Cuantos años tienes?\n")
print(type(age))

# Obtene multiples valores a la vez
country , city = input("En que pais y ciudad vives?\n ").split()
print(f"Vivo en {country} y la ciudad es {city}")
# Respuesta debe tener un espacio "Guatemala Guatemala"