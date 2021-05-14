def tribonacci(signature, n):
    if n == 0:
        return []

    n1, n2, n3 = signature[0], signature[1], signature[2]

    while len(signature) < n:
        nth = n1 + n2 + n3
        n1 = n2
        n2 = n3
        n3 = nth
        signature.append(nth)

    return signature[:n]
