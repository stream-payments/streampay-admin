import { LineItem } from "@medusajs/medusa"
import clsx from "clsx"
import React from "react"
import CheckIcon from "../../../../components/fundamentals/icons/check-icon"
import MinusIcon from "../../../../components/fundamentals/icons/minus-icon"
import PlusIcon from "../../../../components/fundamentals/icons/plus-icon"
import Table from "../../../../components/molecules/table"

const getFulfillableQuantity = (item: LineItem): number => {
  return item.quantity - item.fulfilled_quantity - item.returned_quantity
}

const CreateFulfillmentItemsTable = ({
  items,
  toFulfill,
  setToFulfill,
  quantities,
  setQuantities,
}) => {
  const handleQuantity = (upOrDown, item) => {
    const current = quantities[item.id]

    let newQuantities = { ...quantities }

    if (upOrDown === -1) {
      newQuantities = {
        ...newQuantities,
        [item.id]: current - 1,
      }
    } else {
      newQuantities = {
        ...newQuantities,
        [item.id]: current + 1,
      }
    }

    setQuantities(newQuantities)
  }

  const handleFulfillmentItemToggle = (item) => {
    const id = item.id
    const idxOfToggled = toFulfill.indexOf(id)

    // if already in fulfillment items, you unchecked the item
    // so we remove the item
    if (idxOfToggled !== -1) {
      const newFulfills = [...toFulfill]
      newFulfills.splice(idxOfToggled, 1)
      setToFulfill(newFulfills)
    } else {
      const newFulfills = [...toFulfill, id]
      setToFulfill(newFulfills)

      const newQuantities = {
        ...quantities,
        [item.id]: getFulfillableQuantity(item),
      }

      setQuantities(newQuantities)
    }
  }

  return (
    <Table>
      <Table.HeadRow className="inter-small-semibold border-t border-t-grey-20 text-grey-50">
        <Table.HeadCell>Details</Table.HeadCell>
        <Table.HeadCell />
        <Table.HeadCell className="pr-8 text-right">Quantity</Table.HeadCell>
      </Table.HeadRow>
      <Table.Body>
        {items
          ?.filter((i) => getFulfillableQuantity(i) > 0)
          .map((item) => {
            const checked = toFulfill.includes(item.id)
            return (
              <>
                <Table.Row className={"border-b-grey-0 hover:bg-grey-0"}>
                  <Table.Cell className="w-[50px]">
                    <div className="ml-1 flex h-full items-center">
                      <div
                        onClick={() => handleFulfillmentItemToggle(item)}
                        className={`flex h-5 w-5 cursor-pointer justify-center rounded-base border border-grey-30 text-grey-0 ${
                          checked && "bg-violet-60"
                        }`}
                      >
                        <span className="self-center">
                          {checked && <CheckIcon size={16} />}
                        </span>
                      </div>

                      <input
                        className="hidden"
                        checked={checked}
                        tabIndex={-1}
                        onChange={() => handleFulfillmentItemToggle(item)}
                        type="checkbox"
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex min-w-[240px] py-2">
                      <div className="h-[40px] w-[30px] ">
                        <img
                          className="h-full w-full rounded object-cover"
                          src={item.thumbnail}
                        />
                      </div>
                      <div className="inter-small-regular ml-4 flex flex-col text-grey-50">
                        <span>
                          <span className="text-grey-90">{item.title}</span>
                        </span>
                        <span>{item?.variant?.title || ""}</span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-32 pr-8 text-right">
                    {toFulfill.includes(item.id) ? (
                      <div className="flex w-full justify-end text-right text-grey-50 ">
                        <span
                          onClick={() => handleQuantity(-1, item)}
                          className={clsx(
                            "mr-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded text-grey-50 hover:bg-grey-20",
                            {
                              ["pointer-events-none text-grey-30"]:
                                quantities[item.id] === 1,
                            }
                          )}
                        >
                          <MinusIcon size={16} />
                        </span>
                        <span>{quantities[item.id] || ""}</span>
                        <span
                          onClick={() => handleQuantity(1, item)}
                          className={clsx(
                            "ml-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded text-grey-50 hover:bg-grey-20",
                            {
                              ["pointer-events-none text-grey-30"]:
                                item.quantity - item.fulfilled_quantity ===
                                quantities[item.id],
                            }
                          )}
                        >
                          <PlusIcon size={16} />
                        </span>
                      </div>
                    ) : (
                      <span className="text-grey-40">
                        {getFulfillableQuantity(item)}
                      </span>
                    )}
                  </Table.Cell>
                </Table.Row>
              </>
            )
          })}
      </Table.Body>
    </Table>
  )
}

export default CreateFulfillmentItemsTable
