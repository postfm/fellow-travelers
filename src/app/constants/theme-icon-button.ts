export const ThemeIconButton = {
  iconButton: {
    styles: {
      base: {
        position: 'relative',
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        fontFamily: 'font-sans',
        fontWeight: 'font-medium',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        transition: 'transition-all',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      sizes: {
        lg: {
          width: 'w-[50px]',
          maxWidth: 'max-w-[50px]',
          height: 'h-[50px]',
          maxHeight: 'max-h-[50px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-xl',
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            backgroud: 'bg-[#4d99d6]',
            color: 'text-[#1D2E5B]',
            shadow: 'none',
            hover: 'hover:shadow-none',
            focus: 'focus:shadow-none',
            active: 'active:shadow-none',
          },
        },
        gradient: {
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-gray-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
            active: 'active:opacity-[0.85]',
          },
        },
        outlined: {
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-blue-gray-200',
            active: 'active:opacity-[0.85]',
          },
        },
        text: {
          'blue-gray': {
            color: 'text-[#1D2E5B]',
            hover: 'hover:text-opacity-60',
            active: 'active:bg-[#4d99d6] active:text-[#1D2E5B]',
          },
        },
      },
    },
  },
};
