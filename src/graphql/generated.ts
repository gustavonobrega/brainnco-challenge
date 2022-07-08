import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Concurso = {
  __typename?: 'Concurso';
  data?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  loteria?: Maybe<Scalars['Int']>;
  numeros?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Loteria = {
  __typename?: 'Loteria';
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
};

export type LoteriaConcurso = {
  __typename?: 'LoteriaConcurso';
  concursoId?: Maybe<Scalars['ID']>;
  loteriaId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  concurso?: Maybe<Concurso>;
  loterias?: Maybe<Array<Maybe<Loteria>>>;
  loteriasConcursos?: Maybe<Array<Maybe<LoteriaConcurso>>>;
};


export type QueryConcursoArgs = {
  id: Scalars['ID'];
};

export type GetLotteriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLotteriesQuery = { __typename?: 'Query', loterias?: Array<{ __typename?: 'Loteria', id?: number | null, nome?: string | null } | null> | null, loteriasConcursos?: Array<{ __typename?: 'LoteriaConcurso', loteriaId?: number | null, concursoId?: string | null } | null> | null };

export type GetLotteryContestByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLotteryContestByIdQuery = { __typename?: 'Query', concurso?: { __typename?: 'Concurso', id?: string | null, numeros?: Array<string | null> | null, data?: string | null } | null };


export const GetLotteriesDocument = gql`
    query getLotteries {
  loterias {
    id
    nome
  }
  loteriasConcursos {
    loteriaId
    concursoId
  }
}
    `;

/**
 * __useGetLotteriesQuery__
 *
 * To run a query within a React component, call `useGetLotteriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLotteriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLotteriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLotteriesQuery(baseOptions?: Apollo.QueryHookOptions<GetLotteriesQuery, GetLotteriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLotteriesQuery, GetLotteriesQueryVariables>(GetLotteriesDocument, options);
      }
export function useGetLotteriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLotteriesQuery, GetLotteriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLotteriesQuery, GetLotteriesQueryVariables>(GetLotteriesDocument, options);
        }
export type GetLotteriesQueryHookResult = ReturnType<typeof useGetLotteriesQuery>;
export type GetLotteriesLazyQueryHookResult = ReturnType<typeof useGetLotteriesLazyQuery>;
export type GetLotteriesQueryResult = Apollo.QueryResult<GetLotteriesQuery, GetLotteriesQueryVariables>;
export const GetLotteryContestByIdDocument = gql`
    query GetLotteryContestById($id: ID!) {
  concurso(id: $id) {
    id
    numeros
    data
  }
}
    `;

/**
 * __useGetLotteryContestByIdQuery__
 *
 * To run a query within a React component, call `useGetLotteryContestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLotteryContestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLotteryContestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLotteryContestByIdQuery(baseOptions: Apollo.QueryHookOptions<GetLotteryContestByIdQuery, GetLotteryContestByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLotteryContestByIdQuery, GetLotteryContestByIdQueryVariables>(GetLotteryContestByIdDocument, options);
      }
export function useGetLotteryContestByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLotteryContestByIdQuery, GetLotteryContestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLotteryContestByIdQuery, GetLotteryContestByIdQueryVariables>(GetLotteryContestByIdDocument, options);
        }
export type GetLotteryContestByIdQueryHookResult = ReturnType<typeof useGetLotteryContestByIdQuery>;
export type GetLotteryContestByIdLazyQueryHookResult = ReturnType<typeof useGetLotteryContestByIdLazyQuery>;
export type GetLotteryContestByIdQueryResult = Apollo.QueryResult<GetLotteryContestByIdQuery, GetLotteryContestByIdQueryVariables>;