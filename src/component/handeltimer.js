import React, { useState, useEffect } from 'react';

function Hoke() {
  const [canExecute, setCanExecute] = useState(true);

  const handleClick = () => {
    if (canExecute) {
      // قم بتنفيذ الوظيفة هنا
      console.log('تم تنفيذ الوظيفة');
      setCanExecute(false); // تعيين الحالة لعدم التنفيذ مرة أخرى
    } else {
      console.log('لا يمكن تنفيذ الوظيفة حاليًا');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanExecute(true); // قم بإعادة تفعيل التنفيذ بعد 5 ثوانٍ
    }, 5000);

    return () => clearTimeout(timer); // تنظيف المؤقت عند تفكيك المكون
  }, []);

  return handleClick
}

export default Hoke;
