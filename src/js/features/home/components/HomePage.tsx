import * as React from "react"
import { withProps } from "recompose"

export interface IHomeProps {
  name: string
  number: number
}

export const HomePageComponent = ({ name }: IHomeProps) => (
  <div>Hello dog {name}</div>
)

export const homeWrapper1 = withProps({ name: "dog" })
export const homeWrapper2 = withProps({ number: 2 })

export default homeWrapper2(homeWrapper1(HomePageComponent))
