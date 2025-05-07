import tkinter as tk

def clique_botao():
    rótulo.config(text="Botão clicado!")

# Criação da janela principal
janela = tk.Tk()
janela.title("Aplicativo Tkinter Básico")

# Criação de um rótulo
rótulo = tk.Label(janela, text="Olá, Tkinter!")
rótulo.pack()

# Criação de um botão
botao = tk.Button(janela, text="Clique em mim", command=clique_botao)
botao.pack()

# Execução da aplicação
janela.mainloop()
