/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the Pet class.
 * @constructor
 * @member {string} [name]
 * @member {string} [daysOfWeek] Type of Pet. Possible values include:
 * 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
 * 'Sunday'. Default value: 'Friday' .
 * @member {string} intEnum Possible values include: '1', '2', '3'
 */
export interface Pet {
  name?: string;
  daysOfWeek?: string;
  intEnum: string;
}
