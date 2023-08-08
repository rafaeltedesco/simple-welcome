FROM nginx

COPY ./build /usr/share/nginx/html

EXPOSE 80

# executar o run sem mapear porta para dar problema
# e mostrar excalidraw de portas
# após mapear porta e mostrar que deu tudo certo

# mostrar como fazer o push da imagem para o repositório