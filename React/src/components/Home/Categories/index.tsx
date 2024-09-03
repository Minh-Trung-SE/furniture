import {useCallback, useEffect} from "react";
import useCallAPIState, {CALL_API_STATUS} from "hooks/UseCallAPIState";
import {Category} from "types/Category";
import CategoryService from "services/CategoryService";
import {Link} from "react-router-dom";


const Categories = () => {
    const [categories, setCategories] = useCallAPIState<Category[]>(
        {
            status: CALL_API_STATUS.IDLE,
            data: []
        }
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
        <div className="max-w-1200 mx-auto pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">

                {
                    categories.data.map(
                        (category) => (
                            <div key={category.id} className="relative group rounded-sm overflow-hidden">
                                <img
                                    src={"http://localhost:8080/api/media/".concat(category?.attributes?.image)}
                                    className="w-full"
                                    alt="category"

                                />
                                <Link

                                    to={
                                    {
                                        pathname: "/search",
                                        search: `categoryId=${category.id}`
                                    }
                                    }
                                    className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition"
                                >
                                    {category.name}
                                </Link>
                            </div>
                        )
                    )
                }

            </div>
        </div>
    );
};

export default Categories;