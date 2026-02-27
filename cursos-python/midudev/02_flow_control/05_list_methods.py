lista1 = [1, 2, 3, 4, 5]
print(lista1)

# Añadir un elemento al final de una lista
print("\nAñadir un elemento al final de una lista")
lista1.append(6)
print(lista1)

# Insertar un elemento en una posicion especifica
print("\nInsertar un elemento en una posicion especifica")
lista1.insert(1, 'a') # Inserta un elemento en la posicion indicada como primer argumento
print(lista1)

# Añadir varios elementos al final de la lista (no concatenacion)
print("\nAñadir varios elementos al final de la lista (no concatenacion)")
lista1.extend([7, 8, 9])
print(lista1)

# Eliminar elementos de una lista
print("\nEliminar elementos de una lista")
lista1.remove('a') # Remueve el primer elemento que haga match del argumento (elimina unicamente un elemento)
print(lista1)

# Eliminar el ultimo elemento de la lista y ademas lo devuelve
print("\nEliminar el ultimo elemento de una lista")
ultimo_elemento = lista1.pop()
print(lista1)
print(f"El elemento eliminado fue: {ultimo_elemento}")

# pop tambien puede eliminar elementos segun su indice
print("\nEliminar un elemento de la lista segun el indice")
indice_eliminado = lista1.pop(3) # 4
print(lista1)
print(f"El elemento eliminado por indice fue: {indice_eliminado}")

# Eliminar un rango de elementos
print("\nEliminar un rango de elementos")
del lista1[1:3] # Elimina desde el indice 1 hasta el elemento 3 sin contarlo
print(lista1)

# Eliminar todos los elementos de la lista
print("\nEliminar todos los elementos de la lista")
lista1.clear();
print(lista1)

# Ordenar los elementos de una lista
print("\nOrdenar los elementos de la lista modificando la lista existente")
numbers = [5, 15, 3, 9, 101]
numbers.sort() # Modifica la lista y guarda la lista ordenada, no la devuelve
print(numbers)

# Ordenar los elementos de la lista y almacenar una copia de lista ordenada
print("\nOrdenar los elementos de la lista y almacenar una copia de lista ordenada")
numbers2 = [14, 84, 9, 16, 150, 1152]
sorted_numbers = sorted(numbers2)
print(sorted_numbers)
print(numbers2) 

# Cuantas veces aparece un elemento
print("\nCuantas veces aparece un elemento")
lista2 = [1, 1, 2, 3, 4, 5, 1, 6]
print(f"El numero 1 aparece: {lista2.count(1)} veces")

# Comprobar si existe un elemento
print("\nComprobar si existe un elemento")
print(2 in lista2)