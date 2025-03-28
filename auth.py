import sys


user = "admin"
password = "1234"

def main():
    if len(sys.argv) < 3:
        print("erro")
        return

    usuario = sys.argv[1]
    senha = sys.argv[2]

    if usuario == user and senha == password:
        print("ok")
    else:
        print("erro")

if __name__ == "__main__":
    main()
