import {useInfiniteQuery} from '@tanstack/react-query'

export const sayQueryKey = ['says']

export const useSayListQuery = () => {
    return useInfiniteQuery({
        queryKey: sayQueryKey,
        queryFn: async ({pageParam}) => {
            // const data = await apiClient.say.getAllPaginated(pageParam)
            return {
                "data": [
                    {
                        "id": "5ecdf101db240056bb002f50",
                        "text": "虚假的世界，虚伪的人类。",
                        "created": "2020-05-27T04:48:01.048Z"
                    },
                    {
                        "id": "5ec0fbe876ea595f33fb6daf",
                        "source": "凪的新生活",
                        "text": "自卑不是打不开话匣子的理由，对别人不感兴趣才是真正无法融入社交的原因。原来的我，画地为牢，眼中只有母亲眼中的那一点点风景，看不到别人和整个世界；现在我把目光转开，才发现，我错过了多少精彩。",
                        "created": "2020-05-17T08:55:04.769Z"
                    },
                    {
                        "id": "5ec0a02165d4d8495bc2e9f2",
                        "source": "凪的新生活",
                        "text": "你还是和原来一样带着面具生活，真是令人作呕。",
                        "created": "2020-05-17T02:23:29.570Z"
                    },
                    {
                        "id": "5ebc8c4a5f0af03c7db9d56f",
                        "source": "佛教禅语",
                        "text": "忌妒别人，不会给自己增加任何的好处。忌妒别人，也不可能减少别人的成就。",
                        "author": "hitokoto",
                        "created": "2020-05-14T00:09:46.926Z"
                    },
                    {
                        "id": "5eb9672de2369f53ff02a73c",
                        "source": "生活",
                        "text": "别让生活蹂躏了你眉间的温柔。",
                        "author": "结局",
                        "created": "2020-05-11T14:54:37.319Z"
                    },
                    {
                        "id": "5eb52aa7505ad56acfd25c97",
                        "source": "古城荆棘王",
                        "text": "没有期盼就不会出现奇迹。",
                        "author": "M崽",
                        "created": "2020-05-08T09:47:19.285Z"
                    },
                    {
                        "id": "5eb52a94505ad56acfd25c95",
                        "source": "网络",
                        "text": "生活中若没有朋友，就像生活中没有阳光一样。",
                        "author": "能美",
                        "created": "2020-05-08T09:47:00.436Z"
                    },
                    {
                        "id": "5eb52a73505ad56acfd25c94",
                        "source": "网络",
                        "text": "找不到路，就自己走一条出来。",
                        "author": "魅影陌客",
                        "created": "2020-05-08T09:46:27.694Z"
                    }
                ],
                "pagination": {
                    "total": 38,
                    "currentPage": 4,
                    "total_page": 4,
                    "size": 10,
                    "hasNextPage": false,
                    "has_prev_page": true
                }
            }
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.pagination.hasNextPage
                ? lastPage.pagination.currentPage + 1
                : undefined,
    })
}
