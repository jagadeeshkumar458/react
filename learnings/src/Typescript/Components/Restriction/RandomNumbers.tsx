type RandomNumbersType = {
    value: number
}

type PositiveNumberProps = RandomNumbersType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumberProps = RandomNumbersType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumberProps = RandomNumbersType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumbersProps = PositiveNumberProps | NegativeNumberProps | ZeroNumberProps;

// type RandomNumbersProps = {
//     value: number,
//     isPositive?: boolean,
//     isNegative?: boolean,
//     isZero?: boolean
// }

function RandomNumbers({ value, isPositive, isNegative, isZero }: RandomNumbersProps) {
  return (
    <div>
        {isPositive && value > 0 && <div>Value is Positive</div>}
        {isNegative && value < 0 && <div>Value is Negative</div>}
        {isZero && value === 0 && <div>Value is Zero</div>}
    </div>
  )
}

export default RandomNumbers