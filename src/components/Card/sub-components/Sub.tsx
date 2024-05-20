import { Children, isValidElement, useCallback } from "react"
import styled from "styled-components"

export const CardTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const CardDate = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: rgba(233, 233, 233, 1);
`

export const CardDivider = styled.div`
  display: inline-block;
  content: "";
  height: 1px;
  align-self: stretch;
  background: #4e5053;
`

export const CardBody = styled.div`
  display: flex;
  padding: 20px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const CardHeaderDiv = styled.div<{ imageURL?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  box-sizing: border-box;

  width: 100%;
  padding: 16px 15px 18px 15px;

  ${({ imageURL }) =>
    imageURL &&
    `
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url(${imageURL});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
`

const CardTextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

//** HEADER */
const FILTER = [(<CardTitle />).type, (<CardDate />).type]

export const CardHeader = ({
  children,
  imageURL,
}: React.ComponentPropsWithRef<"div"> & {
  children?: React.ReactNode
  imageURL?: string
}) => {
  const childrenArray = Children.toArray(children)

  const splitChildren = useCallback(() => {
    const selectedChildren: React.ReactNode[] = []

    const filteredChildren = childrenArray.filter(child => {
      if (isValidElement(child) && FILTER.includes(child.type)) {
        selectedChildren.push(child)
        return false
      }
      return true
    })

    return [filteredChildren, selectedChildren]
  }, [childrenArray])

  const [filteredChildren, selectedChildren] = splitChildren()

  return (
    <>
      <CardHeaderDiv imageURL={imageURL}>
        {filteredChildren}
        <CardTextFrame>{selectedChildren}</CardTextFrame>
      </CardHeaderDiv>
    </>
  )
}
