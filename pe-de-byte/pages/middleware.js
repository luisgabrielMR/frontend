import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('token'); // Recupera o token do cookie (ou use localStorage se necessário)

    const url = req.nextUrl.clone();
    if (!token && url.pathname !== '/') {
        // Redireciona o usuário para a página de login se não estiver autenticado
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    return NextResponse.next(); // Permite acesso se o token existir
}

export const config = {
    matcher: ['/api/*'], // Rotas que precisam de proteção
};
