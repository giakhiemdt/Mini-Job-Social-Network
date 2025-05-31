import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tông màu chủ đạo
        brand: {
          DEFAULT: '#34D399',
          dark: '#065F46',
          light: '#A7F3D0'
        },

        // Tông màu phụ
        secondary: {
          light: '#D1FAE5',
          DEFAULT: '#6EE7B7',
          dark: '#10B981'
        },

        // Màu nổi bật
        accent: {
          green: '#00FF7F',
          lime: '#9CA36D',
          yellowish: '#84CC16'
        },

        // Màu cho nút
        button: {
          DEFAULT: '#34D399',
          hover: '#A7F3D0',
          border: '#D1D5DB'
        },

        // Màu chữ
        textColor: {
          DEFAULT: '#1F2937',     // text chính
          muted: '#6B7280',       // text phụ
          light: '#FFFFFF'        // trắng
        },

        // Màu cho thông báo / message
        message: {
          error: '#EF4444',       // đỏ
          info: '#3B82F6',        // xanh dương
          success: '#14B8A6',     // xanh ngọc
          neutral: '#E5E7EB'      // xám
        }
      }
    }
  },
  plugins: []
}

export default config
