/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown
      }
    }
  }
  '/meme_submissions': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.meme_submissions.id']
          created_at?: parameters['rowFilter.meme_submissions.created_at']
          url?: parameters['rowFilter.meme_submissions.url']
          name?: parameters['rowFilter.meme_submissions.name']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['meme_submissions'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** meme_submissions */
          meme_submissions?: definitions['meme_submissions']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.meme_submissions.id']
          created_at?: parameters['rowFilter.meme_submissions.created_at']
          url?: parameters['rowFilter.meme_submissions.url']
          name?: parameters['rowFilter.meme_submissions.name']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.meme_submissions.id']
          created_at?: parameters['rowFilter.meme_submissions.created_at']
          url?: parameters['rowFilter.meme_submissions.url']
          name?: parameters['rowFilter.meme_submissions.name']
        }
        body: {
          /** meme_submissions */
          meme_submissions?: definitions['meme_submissions']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/monument_nominations': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.monument_nominations.id']
          created_at?: parameters['rowFilter.monument_nominations.created_at']
          body?: parameters['rowFilter.monument_nominations.body']
          name?: parameters['rowFilter.monument_nominations.name']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['monument_nominations'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** monument_nominations */
          monument_nominations?: definitions['monument_nominations']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.monument_nominations.id']
          created_at?: parameters['rowFilter.monument_nominations.created_at']
          body?: parameters['rowFilter.monument_nominations.body']
          name?: parameters['rowFilter.monument_nominations.name']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.monument_nominations.id']
          created_at?: parameters['rowFilter.monument_nominations.created_at']
          body?: parameters['rowFilter.monument_nominations.body']
          name?: parameters['rowFilter.monument_nominations.name']
        }
        body: {
          /** monument_nominations */
          monument_nominations?: definitions['monument_nominations']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/post_submissions': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.post_submissions.id']
          created_at?: parameters['rowFilter.post_submissions.created_at']
          body?: parameters['rowFilter.post_submissions.body']
          name?: parameters['rowFilter.post_submissions.name']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['post_submissions'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** post_submissions */
          post_submissions?: definitions['post_submissions']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.post_submissions.id']
          created_at?: parameters['rowFilter.post_submissions.created_at']
          body?: parameters['rowFilter.post_submissions.body']
          name?: parameters['rowFilter.post_submissions.name']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.post_submissions.id']
          created_at?: parameters['rowFilter.post_submissions.created_at']
          body?: parameters['rowFilter.post_submissions.body']
          name?: parameters['rowFilter.post_submissions.name']
        }
        body: {
          /** post_submissions */
          post_submissions?: definitions['post_submissions']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
}

export interface definitions {
  meme_submissions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string
    /** Format: text */
    url: string
    /** Format: text */
    name?: string
  }
  monument_nominations: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string
    /** Format: text */
    body: string
    /** Format: text */
    name?: string
  }
  post_submissions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string
    /** Format: text */
    body: string
    /** Format: text */
    name?: string
  }
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: 'params=single-object'
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none'
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: 'count=none'
  /** @description Filtering Columns */
  select: string
  /** @description On Conflict */
  on_conflict: string
  /** @description Ordering */
  order: string
  /** @description Limiting and Pagination */
  range: string
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string
  /** @description Limiting and Pagination */
  offset: string
  /** @description Limiting and Pagination */
  limit: string
  /** @description meme_submissions */
  'body.meme_submissions': definitions['meme_submissions']
  /** Format: bigint */
  'rowFilter.meme_submissions.id': string
  /** Format: timestamp with time zone */
  'rowFilter.meme_submissions.created_at': string
  /** Format: text */
  'rowFilter.meme_submissions.url': string
  /** Format: text */
  'rowFilter.meme_submissions.name': string
  /** @description monument_nominations */
  'body.monument_nominations': definitions['monument_nominations']
  /** Format: bigint */
  'rowFilter.monument_nominations.id': string
  /** Format: timestamp with time zone */
  'rowFilter.monument_nominations.created_at': string
  /** Format: text */
  'rowFilter.monument_nominations.body': string
  /** Format: text */
  'rowFilter.monument_nominations.name': string
  /** @description post_submissions */
  'body.post_submissions': definitions['post_submissions']
  /** Format: bigint */
  'rowFilter.post_submissions.id': string
  /** Format: timestamp with time zone */
  'rowFilter.post_submissions.created_at': string
  /** Format: text */
  'rowFilter.post_submissions.body': string
  /** Format: text */
  'rowFilter.post_submissions.name': string
}

export interface operations {}

export interface external {}
