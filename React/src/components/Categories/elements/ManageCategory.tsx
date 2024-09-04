import {createColumnHelper} from "@tanstack/react-table";
import Button from "common/Button";
import Modal from "common/Modal";
import {
    TableHeaderGroups,
    TableLoadingRow,
    TablePageSize,
    TablePagination,
    TableRows,
    TableSearch,
    TableSetting,
    useSimpleTable
} from "common/TanStackTable";
import CategoryModal from "components/Categories/elements/CategoryModal";
import CreateCategory from "components/Categories/elements/CreateCategory";
import useCallAPIState, {CALL_API_STATUS} from "hooks/UseCallAPIState";
import {useCallback, useEffect} from "react";
import CategoryService from "services/CategoryService";
import {Category} from "types/Category";

const {accessor, display} = createColumnHelper<Category>();

const columns = [
    accessor(
        "id",
        {
            header: "Id",
            size: 20,
            cell: ({getValue, table, row}) => (
                <Modal.Root>
                    <Modal.Trigger mode="open">
                        #{getValue()}
                    </Modal.Trigger>
                    <CategoryModal table={table} row={row.original} index={row.index}/>
                </Modal.Root>
            )
        }
    ),
    accessor(
        "name",
        {
            minSize: 450,
            header: "Name"
        }
    ),
    accessor(
        "createdAt",
        {
            size:100,
            header: "Created At",
            cell: ({getValue}) => (
                <span>{new Date(getValue()).toLocaleString()}</span>
            )
        }
    ),
    display(
        {
            size: 60,
            header: "Actions",
                cell: () => (
                    <svg className="w-4 h-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                        ></path>
                    </svg>
                )
        }
    )
];


const ManageCategory = () => {
    const [categories, setCategories] = useCallAPIState<Category[]>(
        {
            status: CALL_API_STATUS.IDLE,
            data: []
        }
    )

    const table = useSimpleTable<Category>(
        categories.data,
        columns
    )

    const fetchData = useCallback(
        async () => {
            setCategories(CALL_API_STATUS.LOADING)
            const {payload, success} = await CategoryService.get()
            if (success) {
                setCategories(CALL_API_STATUS.SUCCESS, payload)
            }
        }, [setCategories]
    )

    useEffect(
        () => {
            fetchData()
        },
        [fetchData]
    )

    return (
        <div className="space-y-2">
            <div className="flex justify-between flex-wrap">
                <TableSearch table={table}/>
                <div className="flex flex-none space-x-3">
                    <Modal.Root>
                        <CreateCategory table={table}/>
                    </Modal.Root>
                    <Button
                        variantType="intent"
                        intent="info"
                        onClick={fetchData}
                    >
                        <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </Button>
                    <TableSetting table={table}/>
                </div>
            </div>

            <table className="border rounded min-w-full">
                <thead>
                <TableHeaderGroups table={table}/>
                </thead>
                <tbody>
                {
                    categories.success ? (
                        <TableRows table={table}/>
                    ) : (
                        <TableLoadingRow table={table}/>
                    )
                }
                </tbody>
            </table>
            <div className="flex justify-between">
                <TablePageSize table={table}/>
                <TablePagination table={table}/>
            </div>

        </div>
    );
};

export default ManageCategory;