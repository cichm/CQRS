import * as input from '../input'
import { literal, type, union } from "io-ts";

export const NewsletterEvent = union([
    type({
       type: literal('NewsletterCreated'),
       payload: type({
           newsletterId: input.NewsletterId,
           ownerId: input.GamerId,
           timestamp: input.Timestamp
       })
    }),

    type({
        type: literal('NewsletterDeleted'),
        payload: type({
            gamerId: input.GamerId,
            newsletterId: input.NewsletterId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('NewsletterTitleDefined'),
        payload: type({
            newsletterId: input.NewsletterId,
            title: input.Title,
            timestamp: input.Timestamp
        })
    })
]);