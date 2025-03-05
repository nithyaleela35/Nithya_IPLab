import React from "react";
import "../css/TaxForm.css";

const TaxForm1 = () => {
  return (
    <div className="form-container">
      <div className="form-group">
        <label>4. Tax Number </label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>5. To the tax office</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>6. If you change your place of residence: previous tax office</label>
        <input type="text" />
      </div>
      <h2>General Information</h2>
      <div className="form-group">
        <label>7. Telephone inquiries during the day at</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>8i. Identification number (ID number)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>8ii. Birth date</label>
        <input type="date" />
      </div>
      <div className="form-group">
        <label>9. Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>10. First name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>11. Title, academic degree</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>* Religion Key</label>
        <select>
          <option value="EV">Evangelical (EV)</option>
          <option value="RK">Roman Catholic (RK)</option>
          <option value="VD">Not subject to church tax (VD)</option>
        </select>
      </div>
      <div className="form-group">
        <label>12. Street (current address)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>13i. House number</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>13ii. House number suffix</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>13iii. Address supplement</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>14i. Postal code (domestic)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>14ii. Zip code (abroad)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>15. Place of residence</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>16. State (if address abroad)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>17. Practiced profession</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18i. Married /  Civil  partnership  established since</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18ii. Widowed  since</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18iii. Divorced /  civil  partnership  annulled since</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18iv. Permanently  separated  since</label>
        <input type="text" />
      </div>

      <h2>Bank Details</h2>
      <div className="form-group">
        <label>31. IBAN (domestic financial institution)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>32. IBAN (foreign financial institution)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>33. BIC to line 32</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>34. Name (in case of assignment, please submit official assignment form)</label>
        <input type="text" />
      </div>

      <h2>Migration Details</h2>
      <div className="form-group">
        <label>35. Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>36. First Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>37. Street</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>38i. House number</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>38ii. House number suffix</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>38iii. Mailbox</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>39i. Zip code (domestic)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>39ii. Zip code (abroad)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>40. Place of residence</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>41. State (if address abroad)</label>
        <input type="text" />
      </div>

      <button className="submit-button">Submit</button>
    </div>
  );
};

export default TaxForm1;