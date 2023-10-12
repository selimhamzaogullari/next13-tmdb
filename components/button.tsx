interface ButtonPropsIF {
  color?: 'primary' | 'blue';
  radius?: 'sm' | 'md';
  weight?: 'full' | 'normal';
  transparent?: boolean;
  classNames?: string | undefined;
  onClick: () => void;
  children: any;
}

interface ColorVariantsIF {
  primary: string;
  blue: string;
}
interface WidthVariantsIF {
  full: string;
  normal: string;
}
interface ColorVariantsIF {
  primary: string;
  blue: string;
}

function Button({
  color = 'primary',
  radius = 'md',
  weight = 'normal',
  transparent = false,
  classNames = undefined,
  onClick,
  children,
}: ButtonPropsIF) {
  const colorVariants: ColorVariantsIF = {
    primary: !transparent
      ? 'bg-primary'
      : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors',
    blue: !transparent ? 'bg-blue' : 'bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-blue',
  };
  const widthVariants: WidthVariantsIF = {
    full: 'w-100',
    normal: 'w-32',
  };
  const radiusVariants = {
    sm: 'rounded-sm',
    md: 'rounded-md',
  };

  const onPressFunction = () => {
    onClick();
  };

  return (
    <button
      onClick={onPressFunction}
      className={`h-12 flex items-center justify-center ${colorVariants[color]} ${widthVariants[weight]} ${radiusVariants[radius]} ${classNames}`}>
      {children}
    </button>
  );
}

export default Button;
