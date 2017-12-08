/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a SmartSalmon.
 * @extends models['Salmon']
 */
class SmartSalmon extends models['Salmon'] {
  /**
   * Create a SmartSalmon.
   * @member {string} [collegeDegree]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SmartSalmon
   *
   * @returns {object} metadata of SmartSalmon
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'smart_salmon',
      type: {
        name: 'Composite',
        additionalProperties: true,
        polymorphicDiscriminator: {
          serializedName: 'fishtype',
          clientName: 'fishtype'
        },
        uberParent: 'Fish',
        className: 'SmartSalmon',
        modelProperties: {
          species: {
            required: false,
            serializedName: 'species',
            type: {
              name: 'String'
            }
          },
          length: {
            required: true,
            serializedName: 'length',
            type: {
              name: 'Number'
            }
          },
          siblings: {
            required: false,
            serializedName: 'siblings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FishElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'fishtype',
                      clientName: 'fishtype'
                    },
                    uberParent: 'Fish',
                    className: 'Fish'
                  }
              }
            }
          },
          fishtype: {
            required: true,
            serializedName: 'fishtype',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          iswild: {
            required: false,
            serializedName: 'iswild',
            type: {
              name: 'Boolean'
            }
          },
          collegeDegree: {
            required: false,
            serializedName: 'college_degree',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SmartSalmon;
