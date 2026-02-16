# Secuencia mutable de elementos que puede tener elementos de diferentes tipos
import os 
os.system("clear")

# Creacion de una lista
print("\nCreacion de lista")
lista1 = [1, 2, 3, 4, 5] # Lista de enteros
lista2 = ["manzanas", "peras", "bananas"] # Lista de strings
lista3 = [1, "hola", 3.14, True] # Lista de valores mixtos
lista4 = [] # Lista vacia

# Lista de lista o matrices
lista_de_listas = [[1, 2], [3, 4]]
matrix = [[1, 2], [3, 4], [5, 6]]

print(lista1)
print(lista2)
print(lista3)
print(lista4)
print(lista_de_listas)
print(matrix)

# Acceso por indice
print("\nAcceso por indice")
print(lista2[0]);
print(lista2[-1]); # Desde el final de la lista, la posicion -1 (el ultimo item)
print(lista_de_listas[1][1]) # Segunda lista elemento 2

# Slicing (rebanado) de listas
print("\nSlicing")
print(lista1[1:4]) # 2, 3, 4 # Sintaxis: [desde, hasta (sin incorporarlo)]

# Paso de listas => 2 en 2 ; 3 en 3
print("\nPaso")
lista5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(lista5[::2]) # 2 en 2
print(lista5[::3]) # 3 en 3
print(lista5[::4]) # 4 en 4

# Revertir la lista
print("\nRevertir")
print(lista5[::-1])

# Modificar una lista
print("\nModificando una lista")
lista1[0] = 20
print(lista1)

# Añadir elementos a una lista
print("\nAñadir elementos a una lista")
# Concatenacion de listas
lista1 += [6, 7, 8]
print(lista1)

# Recuperar la longitud de una lista
print("\nRecuperaer la longitud de una lista")
print("La logitud de la lista 1 es:" , len(lista1));