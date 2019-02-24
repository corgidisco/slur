import { GraphQLNonNull, GraphQLID, GraphQLString } from "graphql"
import { GraphQLListOf, GraphQLResolver, Query, listOf, GraphQLInputPagination, Mutation } from "../../../src"
import { Article } from "../entities/article"

@GraphQLResolver(returns => Article)
export class ArticleResolver {

  @Query({
    input: {
      id: {type: GraphQLNonNull(GraphQLID)},
    },
  })
  public async article(parent: null, input: {id: string}) {
    return Object.assign(new Article(), {
      id: `${input.id}`,
      title: `this is ${input.id}`,
    })
  }

  @Query({
    returns: article => GraphQLListOf(article),
    input: GraphQLInputPagination,
  })
  public async articles() {
    return listOf([
      Object.assign(new Article(), {
        id: "1",
        title: "this is 1",
      })
    ])
  }

  @Mutation({
    input: {
      title: {
        type: GraphQLNonNull(GraphQLString),
      },
    },
  })
  public async createArticle(parent: null, input: {title: string}) {
    return Object.assign(new Article(), {
      id: `2`,
      title: input.title,
    })
  }

  @Mutation({
    input: {
      id: {
        type: GraphQLNonNull(GraphQLID),
      },
      title: {
        type: GraphQLString,
      },
    },
  })
  public async updateArticle(parent: null, input: {id: string, title?: string | null}) {
    return Object.assign(new Article(), {
      id: input.id,
      title: typeof input.title === "undefined" ? `this is ${input.id}` : input.title,
    })
  }

  @Mutation({
    input: {
      id: {
        type: GraphQLNonNull(GraphQLID),
      },
    },
  })
  public async deleteArticle(parent: null, input: {id: string}) {
    return Object.assign(new Article(), {
      id: input.id,
      title: `this is ${input.id}`,
    })
  }
}
