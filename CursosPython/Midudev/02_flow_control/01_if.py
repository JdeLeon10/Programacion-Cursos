"""
    Las sentencias permiten ejecutar bloques de codigo si se cumplen ciertas condiciones
"""

# importa el sistema operativo y manda a llamar a clear como stream para limpira la consola
import os
os.system("clear")

# Sentencia if - else
edad = 14;

print("Sentencia if else")
if edad >= 18:
    print("Eres mayor de edad")
else: 
    print("No eres mayor de edad")

# Sentencia elif
print("\nSentencia elif")
nota = 4

if nota >= 9:
    print("Sobresaliente")
elif nota >= 7:
    print("Buena nota")
elif nota >= 5:
    print("Aprobado")
else: 
    print("No calificado")

# Condiciones multiples
print("\nCondiciones multiples")
edad = 24
tiene_licencia = False

if edad >= 18 and tiene_licencia:
    print("Puede conducir")
elif edad >= 18 and not tiene_licencia:
    print("Es mayor de edad pero no tiene licencia")
else:
    print("No puede conducir")