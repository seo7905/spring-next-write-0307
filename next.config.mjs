/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return[
            {
                destination: 'http://localhost:8080/board/:path*',
                source: '/board/:path*', // 프로젝트 시 API로 변경하여 적용
            } 
        ]
    }
};

export default nextConfig;
