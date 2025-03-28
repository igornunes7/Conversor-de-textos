import sys

def main():
    if len(sys.argv) < 2:
        print("Nenhum texto recebido.")
        return

    texto = sys.argv[1]
    print(texto.upper())

if __name__ == "__main__":
    main()
